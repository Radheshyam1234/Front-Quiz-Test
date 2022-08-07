import { QuizCategoryType } from "./QuizType";

export type InitialStateType = {
  categories: QuizCategoryType[];
  currentQuestionNumber: number;
};

export type ContextType = {
  quizState: InitialStateType;
  quizDispatch: (action: QuizAction) => void;
};

export type QuizAction =
  | { type: "SET_CATEGORIES"; payload: QuizCategoryType[] }
  | { type: "INCREASE_QUESTION_NUMBER" }
  | { type: "DECREASE_QUESTION_NUMBER" };
