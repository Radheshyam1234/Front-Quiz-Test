import { QuizType } from "../../../Context/QuizContext/QuizType";

export const getScoreTextColor = (quizTaken: QuizType): string => {
  return quizTaken?.score && quizTaken.score >= 30 ? "green.500" : "red.400";
};
