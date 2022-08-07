import { QuizCardType } from "../../Context/QuizContext/QuizType";
import { Link } from "react-router-dom";
import { Box, Button, Image, Tag, TagLabel } from "@chakra-ui/react";
import {
  quizCardWrapperStyle,
  tagStyle,
  imageStyle,
  quizCardTitleStyle,
} from "./LandingPageStyle";
export const QuizCard = ({ quiz }: { quiz: QuizCardType }) => {
  return (
    <>
      <Box {...quizCardWrapperStyle}>
        <Image src={quiz.image} alt={quiz.name} {...imageStyle} />
        <Box>
          <Box {...quizCardTitleStyle}>{quiz.name}</Box>
          <Box>
            <Tag {...tagStyle}>
              <TagLabel>{quiz.category}</TagLabel>
            </Tag>
          </Box>
        </Box>
        <Link to={`/quiz/${quiz._id}`}>
          <Box>
            <Button variant="solidPrimary">Start Now</Button>
          </Box>
        </Link>
      </Box>
    </>
  );
};
