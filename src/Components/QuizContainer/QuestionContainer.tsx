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
    quizState: { currentQuestionNumber },
    quizDispatch,
  } = useQuizData();

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
          <Button
            mt="4"
            leftIcon={<ArrowBackIcon />}
            variant="solidPrimary"
            disabled={currentQuestionNumber === 1}
            onClick={() => {
              quizDispatch({ type: "DECREASE_QUESTION_NUMBER" });
            }}
            mr={12}
          >
            Prev
          </Button>
          <Button
            mt="4"
            rightIcon={<ArrowForwardIcon />}
            variant="solidPrimary"
            onClick={() => {
              quizDispatch({ type: "INCREASE_QUESTION_NUMBER" });
            }}
          >
            {currentQuestionNumber === 5 ? "Submit" : "Next"}
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
};
