import { QuizCategory } from "./QuizType";

export type InitialStateType = {
  categories: QuizCategory[];
};

export type ContextType = {
  quizState: InitialStateType;
  quizDispatch: (action: QuizAction) => void;
};

export type QuizAction = {
  type: "SET_CATEGORIES";
  payload: QuizCategory[];
};
