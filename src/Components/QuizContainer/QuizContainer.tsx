import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import { QuizType } from "../../Context/QuizContext/QuizType";
import { Instructions } from "./Instructions";
import { QuestionContainer } from "./QuestionContainer";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";
import { QuizResultContainer } from "../QuizResultContainer/QuizResultContainer";

export const QuizContainer = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<null | QuizType>(null);
  const {
    quizState: { currentQuestionNumber },
    quizDispatch,
  } = useQuizData();

  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { response },
        } = await axios({
          method: "GET",
          url: `${API_URL}/quizzes/${quizId}`,
        });
        setQuiz(response);
        quizDispatch({ type: "SET_QUIZ_TAKE", payload: response });
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      quizDispatch({ type: "RESET" });
    };
  }, [quizId]);

  return (
    <>
      {!quiz && "Loading Quiz"}
      {quiz && !showResult && (
        <>
          {!showQuiz ? (
            <Instructions quiz={quiz} setShowQuiz={setShowQuiz} />
          ) : (
            <>
              <QuestionContainer
                question={quiz.questions[currentQuestionNumber - 1]}
                setShowResult={setShowResult}
              />
            </>
          )}
        </>
      )}

      {showResult && <QuizResultContainer />}
    </>
  );
};
