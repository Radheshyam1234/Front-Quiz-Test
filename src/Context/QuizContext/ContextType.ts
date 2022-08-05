import { QuizCategoryType } from "./QuizType";

export type InitialStateType = {
  categories: QuizCategoryType[];
};

export type ContextType = {
  quizState: InitialStateType;
  quizDispatch: (action: QuizAction) => void;
};

export type QuizAction = {
  type: "SET_CATEGORIES";
  payload: QuizCategoryType[];
};
