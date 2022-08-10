import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { QuestionType } from "../../../Context/QuizContext/QuizType";
import { getPointsForAnswer } from "../../../utilities/getPointsForAnswer";
import { OptionsContainer } from "./OptionsContainer/OptionsContainer";

export const AnswerContainer = ({
  question,
  questionNumber,
}: {
  question: QuestionType;
  questionNumber: number;
}) => {
  const pointsEarned = getPointsForAnswer(
    question.options,
    question.points,
    question.negativePoints
  );
  return (
    <>
      <Image
        src={question.image}
        alt="question-Image"
        width="100%"
        minH="200px"
        p={2}
      />
      <Box p="4">
        <Heading
          fontWeight="500"
          fontSize="1.25rem"
          color="secondary.900"
          textAlign="center"
          mb="4"
        >
          Question {questionNumber}
        </Heading>
        <Heading as="h4" size="sm">
          {question.question}
        </Heading>
        <Text mt="1">
          Points : {pointsEarned}/{question.points}
        </Text>
        <OptionsContainer question={question} />
      </Box>
    </>
  );
};
