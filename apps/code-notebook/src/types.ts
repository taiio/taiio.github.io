export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Solution {
  approach: string;
  time: string;
  space: string;
  explanation: string;
  walkthrough: string[];
  /** map: tên ngôn ngữ (vd 'typescript') -> nội dung code */
  code: Record<string, string>;
}

export interface Problem {
  id: string;
  number: number;
  title: string;
  source: string;
  difficulty: Difficulty;
  category: string;
  tags: string[];
  url: string;
  description: string;
  hints: string[];
  /** map: tên ngôn ngữ -> code khởi tạo cho khu vực "Tự viết code" */
  template: Record<string, string>;
  solutions: Solution[];
}

export type ThemeName = 'dark' | 'light';
