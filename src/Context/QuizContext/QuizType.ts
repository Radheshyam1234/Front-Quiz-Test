export type QuizCategoryType = {
  _id: string;
  image: string;
  name: string;
  quizzes: number;
};

export type QuizCardType = {
  _id: string;
  name: string;
  image: string;
  category: string;
};

export type QuizCategoryTypeWithQuizDetails = {
  _id: string;
  name: string;
  quizzes: QuizCardType[];
};

export type OptionType = {
  _id: string;
  text: string;
  isCorrect: boolean;
  isChosen?: boolean;
};

export type QuestionType = {
  _id: string;
  question: string;
  image: string;
  points: number;
  negativePoints: number;
  options: OptionType[];
};

export type QuizType = {
  _id: string;
  category: string;
  name: string;
  image: string;
  questions: QuestionType[];
  score?: number;
  highScore: [];
};
