import { QuizCategoryType, QuizType } from "./QuizType";

export type InitialStateType = {
  categories: QuizCategoryType[];
  quizTaken: QuizType | null;
  currentQuestionNumber: number;
};

export type ContextType = {
  quizState: InitialStateType;
  quizDispatch: (action: QuizAction) => void;
};

export type QuizAction =
  | { type: "SET_CATEGORIES"; payload: QuizCategoryType[] }
  | { type: "SET_QUIZ_TAKE"; payload: QuizType }
  | {
      type: "CHOOSE_OPTION";
      payload: {
        questionId: string;
        optionId: string;
      };
    }
  | { type: "INCREASE_QUESTION_NUMBER" }
  | { type: "DECREASE_QUESTION_NUMBER" }
  | { type: "CALCULATE_SCORE" }
  | { type: "RESET" };
