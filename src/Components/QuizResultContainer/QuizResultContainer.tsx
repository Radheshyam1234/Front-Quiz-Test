import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";
import { QuestionType } from "../../Context/QuizContext/QuizType";
import { AnswerContainer } from "./AnswerContainer/AnswerContainer";
import { getResultText } from "./utilities/getResultText";
import { getScoreTextColor } from "./utilities/getScoreTextColor";

export const QuizResultContainer = () => {
  const {
    quizState: { quizTaken },
  } = useQuizData();

  return (
    <>
      {quizTaken && (
        <Box p="4">
          <Heading fontSize="1.25rem" textAlign="center">
            Quiz Result
          </Heading>
          <Text textAlign="center" fontSize="2rem" mt="4" fontWeight="semibold">
            {getResultText(quizTaken)}
          </Text>
          <Text
            textAlign="center"
            fontSize="large"
            mt="4"
            color={getScoreTextColor(quizTaken)}
          >
            You Scored {quizTaken.score} out of 50
          </Text>

          <Heading textAlign="center" p="2" color="secondary.400">
            {" "}
            Check Answers
          </Heading>
          <SimpleGrid columns={[1, 2, 2]}>
            {quizTaken.questions.map(
              (question: QuestionType, index: number): JSX.Element => {
                return (
                  <AnswerContainer
                    key={question._id}
                    question={question}
                    questionNumber={index + 1}
                  />
                );
              }
            )}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};
