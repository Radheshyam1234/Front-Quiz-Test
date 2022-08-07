import { QuestionType, QuizType } from "../../Context/QuizContext/QuizType";

export type InstructionType = {
  quiz: QuizType;
  setShowQuiz: React.Dispatch<React.SetStateAction<boolean>>;
};
