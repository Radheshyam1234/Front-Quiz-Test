import { categoryOfQuizType } from "../LandingPage";
import { Box, Image, Text } from "@chakra-ui/react";
import { categoryCardWrapperStyle } from "../LandingPageStyle";

export const CategoryCard = ({
  category,
}: {
  category: categoryOfQuizType;
}) => {
  return (
    <>
      <Box textAlign="center" {...categoryCardWrapperStyle}>
        <Image width="100%" src={category.image} alt="quiz" />
        <Text fontSize="1.2rem" fontWeight="500">
          {category.name}
        </Text>
      </Box>
    </>
  );
};
