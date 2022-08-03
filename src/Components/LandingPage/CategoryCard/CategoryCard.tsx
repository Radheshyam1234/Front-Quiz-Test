import { QuizCategory } from "../../../Context/QuizContext/QuizType";
import { Box, Image, Text } from "@chakra-ui/react";
import { categoryCardWrapperStyle } from "../LandingPageStyle";

export const CategoryCard = ({ category }: { category: QuizCategory }) => {
  return (
    <>
      <Box textAlign="center" {...categoryCardWrapperStyle}>
        <Image width="100%" src={category.image} alt="quiz" />
        <Text fontSize="1.2rem" fontWeight="500">
          {category.name}
        </Text>
        <Text fontSize="0.75rem" fontWeight="500">
          {category.quizzes} quiz
        </Text>
      </Box>
    </>
  );
};
