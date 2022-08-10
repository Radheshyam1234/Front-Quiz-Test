import { OptionType } from "../Context/QuizContext/QuizType";

export const isAnswerCorrect = (options: OptionType[]): boolean => {
  return !!options.find(({ isChosen, isCorrect }) => isChosen && isCorrect);
};
