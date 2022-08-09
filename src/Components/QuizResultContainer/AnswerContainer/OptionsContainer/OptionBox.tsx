import { Box } from "@chakra-ui/react";
import { OptionType } from "../../../../Context/QuizContext/QuizType";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export const OptionBox = ({ option }: { option: OptionType }) => {
  const optionBgColor = option.isCorrect
    ? "green.400"
    : option.isChosen
    ? "red.300"
    : "secondary.400";
  return (
    <Box
      bg={optionBgColor}
      maxWidth="15rem"
      p="0.5rem"
      borderRadius="5px"
      textAlign="center"
    >
      <Box>
        {option.isChosen && option.isCorrect && <CheckIcon mr="2" />}
        {option.isChosen && !option.isCorrect && <CloseIcon mr="2" />}
        {option.text}
      </Box>
    </Box>
  );
};
