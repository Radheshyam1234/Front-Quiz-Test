import { QuizType } from "../../../Context/QuizContext/QuizType";

export const getResultText = (quizTaken: QuizType): string => {
  return quizTaken?.score && quizTaken.score >= 30
    ? "🎉 Congratulations! You won!"
    : "🙃 Oops! Better luck next time";
};
