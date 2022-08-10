import { Box, Image, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { OptionsContainer } from "./OptionsContainer";
import { QuestionContainerType } from "./QuizQuestionType";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const QuestionContainer = ({
  question,
  setShowResult,
}: QuestionContainerType) => {
  const {
    quizState: { currentQuestionNumber, quizTaken },
    quizDispatch,
  } = useQuizData();

  const submitQuiz = () => {
    quizDispatch({ type: "CALCULATE_SCORE" });
    setShowResult(true);
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 2]} my="2rem" textAlign="center">
        <Image src={question.image} width="100%" minH="200px" p={2} />
        <Box p={4}>
          <Heading as="h4" size="sm">
            Question {currentQuestionNumber}
          </Heading>
          <Heading as="h3" mt="1rem" size="md">
            {question.question}
          </Heading>
          <OptionsContainer question={question} />

          {currentQuestionNumber !== quizTaken?.questions.length ? (
            <Button
              mt="4"
              rightIcon={<ArrowForwardIcon />}
              variant="solidPrimary"
              onClick={() => {
                quizDispatch({ type: "INCREASE_QUESTION_NUMBER" });
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
      </SimpleGrid>
    </>
  );
};
