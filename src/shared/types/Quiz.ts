export interface Quiz {
  _id: string;
  title: string;
  description?: string;
  questions: Question[];
  time: number;
  points: number;
  sorted: boolean;
}
export interface Question {
  _id: string;
  type: "text" | "mcq" | "file";
  multiple: boolean;
  text?: string;
  image?: string;
  options: Option[];
  correctAnswers?: Option[];
  points?: number;
  sorted: boolean;
}
export interface Option {
  _id: string;
  text?: string;
  image?: string;
}
