
export interface Lesson {
  id: string;
  title: string;
  content: string;
  type: 'concept' | 'practical' | 'risk' | 'prompt-template' | 'summary';
  icon?: string;
  image?: string; // URL to the slide image (thumbnail)
  slides?: string[]; // Array of slide URLs for carousel
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
