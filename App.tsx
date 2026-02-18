
import React, { useState, useMemo, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { COURSE_CONTENT } from './courseData';

const SlideCarousel: React.FC<{ slides: string[]; onZoom: (src: string) => void }> = ({ slides, onZoom }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mb-8 relative group">
      <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img 
          src={slides[currentSlide]} 
          alt={`Slide ${currentSlide + 1}`} 
          className="w-full h-full object-contain cursor-zoom-in"
          onClick={() => onZoom(slides[currentSlide])}
        />
        
        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}
        
        {/* Slide Counter Indicator */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          Slide {currentSlide + 1} / {slides.length}
        </div>
      </div>
      
      {/* Thumbnails helper (dots) */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'bg-blue-600 w-4' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [activeLessonId, setActiveLessonId] = useState(COURSE_CONTENT.modules[0].lessons[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Scroll to top when lesson changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [activeLessonId]);

  const activeLesson = useMemo(() => {
    for (const module of COURSE_CONTENT.modules) {
      const lesson = module.lessons.find(l => l.id === activeLessonId);
      if (lesson) return lesson;
    }
    return COURSE_CONTENT.modules[0].lessons[0];
  }, [activeLessonId]);

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    // Helper to parse inline markdown (**bold** and <br>)
    const parseInlineMarkdown = (text: string) => {
      const lines = text.split('<br>');
      return lines.map((line, lineIdx) => {
        const parts = line.split('**');
        return (
          <React.Fragment key={lineIdx}>
            {lineIdx > 0 && <br />}
            {parts.map((part, partIdx) => 
              partIdx % 2 === 1 ? <strong key={partIdx} className="font-bold text-slate-900">{part}</strong> : part
            )}
          </React.Fragment>
        );
      });
    };

    while (i < lines.length) {
      const line = lines[i];

      // Detect markdown table (lines starting with |)
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        if (tableLines.length >= 2) {
          const parseRow = (row: string) =>
            row.split('|').slice(1, -1).map(cell => cell.trim());

          const headerCells = parseRow(tableLines[0]);
          // Skip separator row (|---|---|)
          const startIdx = tableLines[1].replace(/[|\s\-:]/g, '') === '' ? 2 : 1;
          const bodyRows = tableLines.slice(startIdx).map(parseRow);

          elements.push(
            <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    {headerCells.map((cell, ci) => (
                      <th key={ci} className="px-4 py-3 text-left font-semibold text-slate-700">
                        {parseInlineMarkdown(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3 text-slate-600 border-t border-slate-100 align-top">
                          {parseInlineMarkdown(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-2xl font-bold text-slate-800 mt-10 mb-6 pb-2 border-b-2 border-slate-100">{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push(<li key={i} className="ml-6 text-slate-600 mb-2 list-disc leading-relaxed">{parseInlineMarkdown(line.substring(2))}</li>);
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={i} className="my-6 p-4 bg-slate-50 border-l-4 border-blue-500 italic text-slate-700 rounded-r-lg">
            {parseInlineMarkdown(line.substring(2))}
          </blockquote>
        );
      } else if (line.match(/^\d+\./)) {
        // Remove the number and dot (e.g. "1. " -> "") to parse content, but keep number for display? 
        // Actually simplest is just parse the whole line
        elements.push(<p key={i} className="ml-2 font-medium text-slate-800 mt-6 mb-2">{parseInlineMarkdown(line)}</p>);
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-4" />);
      } else if (line.match(/!\[.*?\]\(.*?\)/)) {
        // Image support: ![alt](src)
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          elements.push(
            <div key={i} className="my-8 rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
              <img 
                src={match[2]} 
                alt={match[1]} 
                className="w-full h-auto object-contain max-h-[500px] cursor-zoom-in"
                loading="lazy"
                onClick={() => setZoomedImage(match[2])}
              />
              {match[1] && <p className="text-center text-xs text-slate-400 mt-2 pb-2">{match[1]}</p>}
            </div>
          );
        }
      } else {
        elements.push(<p key={i} className="text-slate-600 leading-relaxed mb-4">{parseInlineMarkdown(line)}</p>);
      }
      i++;
    }

    return elements;
  };

  const flattenLessons = useMemo(() => {
    return COURSE_CONTENT.modules.flatMap(m => m.lessons);
  }, []);

  const currentIndex = flattenLessons.findIndex(l => l.id === activeLessonId);
  const prevLesson = flattenLessons[currentIndex - 1];
  const nextLesson = flattenLessons[currentIndex + 1];

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-all"
            onClick={() => setZoomedImage(null)}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <img 
            src={zoomedImage} 
            alt="Zoomed view" 
            className="max-w-full max-h-screen object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <Sidebar 
        courseTitle={COURSE_CONTENT.title}
        modules={COURSE_CONTENT.modules}
        activeLessonId={activeLessonId}
        onLessonSelect={setActiveLessonId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-slate-600 hover:text-slate-900 p-2"
            >
              <i className="fa-solid fa-bars-staggered text-xl"></i>
            </button>
            <nav className="flex items-center gap-2 text-sm text-slate-400 overflow-hidden">
              <span className="hidden sm:inline hover:text-slate-600 cursor-pointer">หลักสูตร AI for HR</span>
              <i className="fa-solid fa-chevron-right text-[10px] hidden sm:inline"></i>
              <span className="font-semibold text-slate-800 truncate">{activeLesson.title}</span>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">BETA 3.0</span>
            <button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                setIsLoggedIn(false);
              }}
              className="text-xs text-slate-400 hover:text-red-500 transition-colors ml-2"
              title="Logout"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto bg-slate-50/30"
        >
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            {/* Lesson Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-block px-3 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${
                  activeLesson.type === 'concept' ? 'bg-blue-100 text-blue-700' :
                  activeLesson.type === 'practical' ? 'bg-emerald-100 text-emerald-700' :
                  activeLesson.type === 'risk' ? 'bg-rose-100 text-rose-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {activeLesson.type}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs text-slate-400 font-medium">ใช้เวลาอ่านประมาณ 3-5 นาที</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {activeLesson.title}
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>

            {/* Content Body */}
            <article className="bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-14 mb-12">
              {/* Slide Carousel at Top */}
              {activeLesson.slides && activeLesson.slides.length > 0 && (
                <SlideCarousel key={activeLesson.id} slides={activeLesson.slides} onZoom={setZoomedImage} />
              )}
              
              {/* Fallback for single image if no slides array but image exists (legacy support) */}
              {!activeLesson.slides && activeLesson.image && (
                 <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                  <img 
                    src={activeLesson.image} 
                    alt={`Slide for ${activeLesson.title}`} 
                    className="w-full h-auto object-cover cursor-zoom-in hover:opacity-95 transition-opacity"
                    loading="lazy"
                    onClick={() => setZoomedImage(activeLesson.image!)}
                  />
                </div>
              )}
              
              <div className="prose prose-lg prose-slate max-w-none">
                {renderContent(activeLesson.content)}
              </div>
            </article>

            {/* Navigation Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-slate-200 pt-10">
              {prevLesson ? (
                <button 
                  className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 flex items-center justify-center gap-2 transition-all group"
                  onClick={() => setActiveLessonId(prevLesson.id)}
                >
                  <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
                  บทเรียนก่อนหน้า
                </button>
              ) : <div />}

              {nextLesson ? (
                <button 
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl text-sm font-black hover:bg-blue-600 flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95"
                  onClick={() => setActiveLessonId(nextLesson.id)}
                >
                  เรียนบทถัดไป
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </button>
              ) : (
                <div className="bg-emerald-50 text-emerald-700 px-6 py-4 rounded-2xl font-bold flex items-center gap-2">
                  <i className="fa-solid fa-circle-check"></i>
                  You have completed this course!
                </div>
              )}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                AI for HR Learning Path by น้องเฉียบ
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
