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
    case "INCREASE_QUESTION_NUMBER":
      return {
        ...quizState,
        currentQuestionNumber: quizState.currentQuestionNumber + 1,
      };
    case "DECREASE_QUESTION_NUMBER":
      return {
        ...quizState,
        currentQuestionNumber: quizState.currentQuestionNumber - 1,
      };
    default:
      throw new Error("NO Such action action");
  }
};
