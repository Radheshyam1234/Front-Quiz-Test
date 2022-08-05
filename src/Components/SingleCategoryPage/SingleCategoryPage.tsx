import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizCard } from "../LandingPage/QuizCard";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import {
  QuizCardType,
  QuizCategoryTypeWithQuizDetails,
} from "../../Context/QuizContext/QuizType";
import axios from "axios";
import { API_URL } from "../../utilities/constants";

export const SingleCategoryPage = () => {
  const { categoryId } = useParams();
  const [categoryDetails, setCategoryDetails] =
    useState<QuizCategoryTypeWithQuizDetails | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { response },
        } = await axios({
          method: "GET",
          url: `${API_URL}/quizCategories/${categoryId}`,
        });
        setCategoryDetails(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return (
    <>
      {categoryDetails && (
        <>
          <Heading textAlign="center" p="8">
            {categoryDetails.name} Quizzes
          </Heading>
          {categoryDetails.quizzes.length > 0 ? (
            <SimpleGrid>
              {categoryDetails.quizzes.map((quiz) => {
                return <QuizCard quiz={quiz} key={quiz._id} />;
              })}
            </SimpleGrid>
          ) : (
            "Coming Soon"
          )}
        </>
      )}
    </>
  );
};
