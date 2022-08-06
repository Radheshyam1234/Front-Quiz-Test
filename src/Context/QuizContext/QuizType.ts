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
