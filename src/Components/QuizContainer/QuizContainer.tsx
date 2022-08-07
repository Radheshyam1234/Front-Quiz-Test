import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import { QuizType } from "../../Context/QuizContext/QuizType";
import { Instructions } from "./Instructions";
import { QuestionContainer } from "./QuestionContainer";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";

export const QuizContainer = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<null | QuizType>(null);
  const {
    quizState: { currentQuestionNumber },
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
      } catch (error) {
        console.log(error);
      }
    })();
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
    </>
  );
};
