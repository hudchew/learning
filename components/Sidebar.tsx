
import React from 'react';
import { Module, Lesson } from '../types';

interface SidebarProps {
  courseTitle: string;
  modules: Module[];
  activeLessonId: string;
  onLessonSelect: (lessonId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ courseTitle, modules, activeLessonId, onLessonSelect, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 w-72 bg-slate-900 text-white flex flex-col`}>
      <div className="p-6 border-b border-slate-700 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {courseTitle}
        </h1>
        <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        {modules.map((module) => (
          <div key={module.id} className="mb-6">
            <h3 className="px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {module.title}
            </h3>
            <div className="space-y-1">
              {module.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    onLessonSelect(lesson.id);
                    if (window.innerWidth < 768) onClose();
                  }}
                  className={`w-full text-left px-6 py-2 flex items-center gap-3 transition-colors ${
                    activeLessonId === lesson.id 
                      ? 'bg-blue-600/20 text-blue-400 border-r-4 border-blue-500' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <i className={`fa-solid ${lesson.icon || 'fa-book-open'} w-5 text-center`}></i>
                  <span className="text-sm font-medium">{lesson.title}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-slate-800/50 border-t border-slate-700">
        <div className="flex items-center gap-3 text-slate-400 text-xs">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <p className="font-semibold text-slate-200">HR Professional</p>
            <p>Learning Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
