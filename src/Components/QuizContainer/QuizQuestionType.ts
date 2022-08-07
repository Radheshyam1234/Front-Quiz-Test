import { QuestionType } from "../../Context/QuizContext/QuizType";

export type QuestionContainerType = {
  question: QuestionType;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
};
