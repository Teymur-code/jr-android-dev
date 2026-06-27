export interface Day {
  id: number;
  title: string;
  focus: string;
  theory: string;
  practice: string;
  homework: string;
  miniChallenge: string;
  outcome: string;
  readTopic: string;
  watchTopic: string;
  duration: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DebuggingExercise {
  title: string;
  description: string;
  brokenCode: string;
  fixedCode: string;
  explanation: string;
}

export interface RefactoringExercise {
  title: string;
  description: string;
  smellyCode: string;
  cleanCode: string;
  explanation: string;
}

export interface Week {
  id: number;
  theme: string;
  focus: string;
  days: Day[];
  quiz: QuizQuestion[];
  debugging: DebuggingExercise;
  refactoring: RefactoringExercise;
  checkpoint: string;
}

export interface PortfolioProject {
  name: string;
  tagline: string;
  description: string;
  architecture: string;
  features: string[];
  techStack: string[];
  diagramGuide: string;
  improvements: string[];
}

export interface InterviewQA {
  question: string;
  answer: string;
  category: "Kotlin" | "Compose" | "Architecture" | "Coroutines" | "Git" | "Testing";
}

export interface Month {
  id: number;
  title: string;
  focus: string;
  portfolio: PortfolioProject;
  interviewPrep: InterviewQA[];
  reviewChecklist: string[];
  weeks: Week[];
}
