import { OptionType } from "../Context/QuizContext/QuizType";
import { isAnswerCorrect } from "./CheckAnswer";

export const getPointsForAnswer = (
  options: OptionType[],
  points: number,
  negativePoints?: number
): number => {
  return isAnswerCorrect(options)
    ? points
    : negativePoints
    ? negativePoints
    : 0;
};
