import { isAnswerCorrect } from "../../../utilities/CheckAnswer";
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

    case "SET_QUIZ_TAKE":
      return { ...quizState, quizTaken: action.payload };

    case "CHOOSE_OPTION": {
      if (quizState.quizTaken) {
        const QuestionsWithUpdatedAnswers = quizState.quizTaken?.questions.map(
          (question) => {
            if (question._id !== action.payload.questionId) return question;
            else {
              return {
                ...question,
                options: question.options.map((option) =>
                  option._id !== action.payload.optionId
                    ? { ...option, isChosen: false }
                    : { ...option, isChosen: true }
                ),
              };
            }
          }
        );
        return {
          ...quizState,
          quizTaken: {
            ...quizState.quizTaken,
            questions: QuestionsWithUpdatedAnswers,
          },
        };
      } else {
        throw new Error("No quiz attempted");
      }
    }

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

    case "CALCULATE_SCORE": {
      if (quizState.quizTaken) {
        const score = quizState.quizTaken.questions.reduce(
          (total: number, { points, negativePoints, options }): number => {
            if (isAnswerCorrect(options)) {
              return total + points;
            }
            return negativePoints ? total - negativePoints : total;
          },
          0
        );

        const scoreDetails = {
          score: score,
          quizId: quizState.quizTaken._id,
          quizName: quizState.quizTaken.name,
          resultStatus: score >= 60 ? "PASS" : "FAIL",
        };
        return {
          ...quizState,
          quizTaken: {
            ...quizState.quizTaken,
            score,
          },
        };
      } else {
        throw new Error("No quiz attempted");
      }
    }

    case "RESET":
      return {
        ...quizState,
        quizTaken: null,
        currentQuestionNumber: 1,
      };

    default:
      throw new Error("NO Such action action");
  }
};
