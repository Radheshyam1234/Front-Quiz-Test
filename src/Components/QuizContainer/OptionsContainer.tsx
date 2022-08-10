import { OptionType, QuestionType } from "../../Context/QuizContext/QuizType";
import { Box, SimpleGrid, useRadio, useRadioGroup } from "@chakra-ui/react";
import { radioCardStyle } from "./QuizStyle";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props.radio);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} checked={false} />
      <Box {...checkbox} {...radioCardStyle}>
        {props.children}
      </Box>
    </Box>
  );
}

export const OptionsContainer = ({ question }: { question: QuestionType }) => {
  const { quizDispatch } = useQuizData();

  const updateAnswer = (optionId: string): void => {
    quizDispatch({
      type: "CHOOSE_OPTION",
      payload: {
        questionId: question._id,
        optionId: optionId,
      },
    });
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: updateAnswer,
  });
  const group = getRootProps();
  return (
    <>
      <SimpleGrid columns={[2, 2, 2]} gap="1rem" mt="1.75rem">
        {question?.options.map((option: OptionType): JSX.Element => {
          const radio = getRadioProps({
            value: option._id,
          });

          return (
            <RadioCard key={option._id} radio={radio} option={option}>
              {option.text}
            </RadioCard>
          );
        })}
      </SimpleGrid>
    </>
  );
};
