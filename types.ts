
export interface Lesson {
  id: string;
  title: string;
  content: string;
  type: 'concept' | 'practical' | 'risk' | 'prompt-template';
  icon?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseData {
  title: string;
  modules: Module[];
}
