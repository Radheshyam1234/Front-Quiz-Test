import { Box, SimpleGrid, Text, Button, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { headerStyle } from "./LandingPageStyle";
import { CategoryCard } from "./CategoryCard/CategoryCard";
import { useQuizData } from "../../Context/QuizContext/QuizDataProvider";
import { QuizCategoryType } from "../../Context/QuizContext/QuizType";
import { Loader } from "../Loader/Loader";
import { HashLink as Link } from "react-router-hash-link";

export const LandingPage = () => {
  const { quizState } = useQuizData();

  return (
    <>
      <SimpleGrid columns={[1, 2]} mb="2rem" px="2.5rem">
        <Box textAlign="center" pt="4rem" fontSize="xx-large">
          <Text
            fontSize="xx-large"
            mt="0.5rem"
            fontWeight="500"
            color="primary.700"
          >
            Front-Quiz
          </Text>
          <Text fontSize="x-large">
            Want to check or enhance your knoweldge ?
          </Text>
          <Text fontSize="x-large">Practice these quizzes</Text>
          <Link to="#categories">
            <Button variant="solidPrimary">Explore quizzes</Button>
          </Link>
        </Box>
        <Box>
          <Image
            src="https://res.cloudinary.com/radheshyam11/image/upload/v1658670974/quizImage_yiilq4.png"
            alt="promo"
            maxH={530}
            width="90%"
          />
        </Box>
      </SimpleGrid>

      <Heading {...headerStyle}>CATEGORIES TO PRACTICE</Heading>
      {!quizState.categories.length && <Loader size="lg" />}
      <Box id="categories">
        <SimpleGrid
          columns={[2, 2, 4]}
          mt="3rem"
          mb="2rem"
          px={4}
          gridGap={["2rem", "2rem", "2rem"]}
        >
          {quizState?.categories?.map(
            (category: QuizCategoryType): JSX.Element => (
              <CategoryCard category={category} key={category._id} />
            )
          )}
        </SimpleGrid>
      </Box>
    </>
  );
};
