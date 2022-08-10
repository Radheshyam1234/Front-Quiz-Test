import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  SimpleGrid,
  Button,
  Icon,
} from "@chakra-ui/react";
import { OptionsContainer } from "./OptionsContainer";
import { QuestionContainerType } from "./QuizQuestionType";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FiClock } from "react-icons/fi";
import { actionButtonContainerStyle, timerBoxStyle } from "./QuizStyle";

export const QuestionContainer = ({
  question,
  setShowResult,
}: QuestionContainerType) => {
  const {
    quizState: { currentQuestionNumber, quizTaken },
    quizDispatch,
  } = useQuizData();

  const [timer, setTimer] = useState(45);
  const navigate = useNavigate();

  useEffect(() => {
    let timeId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer == 0) {
      if (currentQuestionNumber === quizTaken?.questions.length) submitQuiz();
      else {
        quizDispatch({ type: "INCREASE_QUESTION_NUMBER" });
        setTimer(45);
      }
    }
    return () => {
      clearInterval(timeId);
    };
  }, [timer]);

  const quitQuiz = () => {
    quizDispatch({ type: "RESET" });
    navigate("/");
  };

  const submitQuiz = () => {
    quizDispatch({ type: "CALCULATE_SCORE" });
    setShowResult(true);
  };

  return (
    <>
      <Box {...timerBoxStyle}>
        <Icon as={FiClock} mr="2" /> {timer} sec
      </Box>
      <SimpleGrid columns={[1, 2, 2]} my="2rem" textAlign="center">
        <Image src={question?.image} width="100%" minH="200px" p={2} />
        <Box p={4}>
          <Heading as="h4" size="sm">
            Question {currentQuestionNumber}
          </Heading>
          <Heading as="h3" mt="1rem" size="md">
            {question?.question}
          </Heading>
          <OptionsContainer question={question} />

          <Box {...actionButtonContainerStyle}>
            <Button
              variant="solidPrimary"
              onClick={() => {
                quitQuiz();
              }}
            >
              Quit
            </Button>

            {currentQuestionNumber !== quizTaken?.questions.length ? (
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant="solidPrimary"
                onClick={() => {
                  quizDispatch({ type: "INCREASE_QUESTION_NUMBER" });
                  setTimer(45);
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                mt="4"
                rightIcon={<ArrowForwardIcon />}
                variant="solidPrimary"
                onClick={() => {
                  submitQuiz();
                }}
              >
                Submit
              </Button>
            )}
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};
