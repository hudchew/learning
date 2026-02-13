
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import { COURSE_CONTENT } from './courseData';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState(COURSE_CONTENT.modules[0].lessons[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeLesson = useMemo(() => {
    for (const module of COURSE_CONTENT.modules) {
      const lesson = module.lessons.find(l => l.id === activeLessonId);
      if (lesson) return lesson;
    }
    return COURSE_CONTENT.modules[0].lessons[0];
  }, [activeLessonId]);

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold text-slate-800 mt-10 mb-6 pb-2 border-b-2 border-slate-100">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('**') && line.includes('**')) {
        // Simple bold handling
        const parts = line.split('**');
        return (
          <p key={i} className="mt-4 text-slate-700">
            {parts.map((part, idx) => (idx % 2 === 1 ? <strong key={idx} className="text-slate-900 font-bold">{part}</strong> : part))}
          </p>
        );
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return <li key={i} className="ml-6 text-slate-600 mb-2 list-disc leading-relaxed">{line.substring(2)}</li>;
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={i} className="my-6 p-4 bg-slate-50 border-l-4 border-blue-500 italic text-slate-700 rounded-r-lg">
            {line.substring(2)}
          </blockquote>
        );
      }
      if (line.match(/^\d+\./)) {
        return <p key={i} className="ml-2 font-medium text-slate-800 mt-6 mb-2">{line}</p>;
      }
      if (line.trim() === '') return <div key={i} className="h-4" />;
      
      return <p key={i} className="text-slate-600 leading-relaxed mb-4">{line}</p>;
    });
  };

  const flattenLessons = useMemo(() => {
    return COURSE_CONTENT.modules.flatMap(m => m.lessons);
  }, []);

  const currentIndex = flattenLessons.findIndex(l => l.id === activeLessonId);
  const prevLesson = flattenLessons[currentIndex - 1];
  const nextLesson = flattenLessons[currentIndex + 1];

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm" 
          onClick={() => setIsSidebarOpen(false)}
        />
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
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50/30">
          <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
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
              {/* Slide Image Placeholder */}
              {activeLesson.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                  <img 
                    src={activeLesson.image} 
                    alt={`Slide for ${activeLesson.title}`} 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="bg-slate-50 px-4 py-2 text-[10px] text-slate-400 text-center uppercase tracking-wider border-t border-slate-100">
                    รูปภาพประกอบจาก Slide Handout
                  </div>
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
                  ยินดีด้วยครับ! พี่เรียนจบหลักสูตรนี้แล้ว
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
