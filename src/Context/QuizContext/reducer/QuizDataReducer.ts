import { InitialStateType, QuizAction } from "../ContextType";

export const quizDataReducer = (
  quizState: InitialStateType,
  action: QuizAction
) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...quizState,
        categories: action.payload,
      };
    default:
      throw new Error("NO Such action action");
  }
};
