import {
  Box,
  ListItem,
  UnorderedList,
  Button,
  Heading,
} from "@chakra-ui/react";
import { InstructionType } from "./QuizInstructionType";
import { quizInstructionWrapper } from "./QuizStyle";

export const Instructions = ({ quiz, setShowQuiz }: InstructionType) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box {...quizInstructionWrapper}>
        <Heading
          fontSize="1.75rem"
          fontWeight="600"
          textAlign="center"
          mb="1rem"
        >
          {quiz.name}
        </Heading>
        <UnorderedList>
          <ListItem>
            There will be total {quiz.questions.length} multiple choice
            questions.
          </ListItem>
          <ListItem>
            Each Question is of {quiz.questions[0].points} points.
          </ListItem>
          <ListItem>There is no negative marking.</ListItem>
          <ListItem>
            Each Question will have four options out of which only one is
            correct.
          </ListItem>
          <ListItem>Each question is mandatory to be answered.</ListItem>
          <ListItem>
            Once you moved to next question , there will be no option to move
            previous question.
          </ListItem>
          <ListItem>Score at least 60% to win the quiz.</ListItem>
          <ListItem>
            <b>
              Don't refresh the page while giving quiz, give quiz in one take.
              Otherwise your progress will be reset.
            </b>
          </ListItem>
        </UnorderedList>
        <Button
          mt="4"
          variant="solidPrimary"
          onClick={() => {
            setShowQuiz(true);
          }}
        >
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};
