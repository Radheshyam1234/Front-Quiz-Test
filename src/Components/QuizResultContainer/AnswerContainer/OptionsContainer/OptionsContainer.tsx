import { SimpleGrid } from "@chakra-ui/react";
import {
  OptionType,
  QuestionType,
} from "../../../../Context/QuizContext/QuizType";
import { OptionBox } from "./OptionBox";

export const OptionsContainer = ({ question }: { question: QuestionType }) => {
  return (
    <>
      <SimpleGrid columns={[2, 2, 2]} gap="1rem" mt="1.75rem">
        {question.options.map((option: OptionType): JSX.Element => {
          return <OptionBox key={option._id} option={option} />;
        })}
      </SimpleGrid>
    </>
  );
};
