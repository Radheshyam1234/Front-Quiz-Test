import React, { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
const questions = [
  {
    question:
      "According to cascading and specificity rules, what color will will the link be ?",
    image:
      "https://res.cloudinary.com/radheshyam11/image/upload/v1659467719/carbon_23_sqjfkn.png",
    points: 10,
    options: [
      {
        text: "yellow",
        isCorrect: true,
      },
      {
        text: "green",
        isCorrect: false,
      },
      {
        text: "red",
        isCorrect: false,
      },
      {
        text: "blue",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      " Among these selectors which selector has the highest specificity ranking for selecting the anchor link element? ?",
    image:
      "https://res.cloudinary.com/radheshyam11/image/upload/v1659467823/carbon_24_fvh81o.png",
    points: 10,
    options: [
      {
        text: "div a",
        isCorrect: false,
      },
      {
        text: ".example a",
        isCorrect: true,
      },
      {
        text: "a",
        isCorrect: false,
      },
      {
        text: "ul li a",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      " If the width of the container is 500 pixels, what would the width of the three columns be in this layout ?",
    image:
      "https://res.cloudinary.com/radheshyam11/image/upload/v1659467908/carbon_25_iqk34u.png",
    points: 10,
    options: [
      {
        text: "50px, 200px, 300px",
        isCorrect: false,
      },
      {
        text: "50px, 100px, 200px",
        isCorrect: false,
      },
      {
        text: "50px, 50px, 100px",
        isCorrect: false,
      },
      {
        text: "50px, 150px, 300px",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "In the following example, what color will paragraph one and paragraph two be? (Alternative: In this example, what color will paragraphs one and two be ?",
    image:
      "https://res.cloudinary.com/radheshyam11/image/upload/v1659468821/carbon_26_v2g4ea.png",
    points: 10,
    options: [
      {
        text: "Paragraph one will be blue, paragraph two will be red.",
        isCorrect: false,
      },
      {
        text: "Both paragraphs will be blue",
        isCorrect: false,
      },
      {
        text: " Paragraphs one will be red, paragraph two will be blue.",
        isCorrect: true,
      },
      {
        text: "Both paragraphs will be red.",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the vertical gap between the two elements below ?",
    image:
      "https://res.cloudinary.com/radheshyam11/image/upload/v1659468431/carbon_27_mehqfn.png",
    points: 10,
    options: [
      {
        text: "4 rem",
        isCorrect: false,
      },
      {
        text: "32 px",
        isCorrect: false,
      },
      {
        text: "2 rem",
        isCorrect: true,
      },
      {
        text: "64px",
        isCorrect: false,
      },
    ],
  },
];

export const AddQuiz = () => {
  const [quizDetails, setQuizDetails] = useState({
    name: "",
    image: "",
    category: "62e95d053eae6af4a15a4c47",
    questions: questions,
  });

  // const [categoryDetails, setCategoryDetails] = useState({
  //   name: "",
  //   image: "",
  // });

  const handleClick = async () => {
    try {
      const {
        data: { response },
      } = await axios({
        url: "http://localhost:8080/quizzes",
        method: "post",
        data: quizDetails,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCategory = async () => {
  //   console.log(categoryDetails);
  //   try {
  //     const {
  //       data: { response },
  //     } = await axios({
  //       url: "http://localhost:8080/quizCategories",
  //       method: "post",
  //       data: categoryDetails,
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="quiz-name"
        onChange={(e) => {
          setQuizDetails((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="quiz-image-link"
        onChange={(e) => {
          setQuizDetails({ ...quizDetails, image: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="quiz-category-name"

        // onChange={(e) => {
        //   setQuizDetails({ ...quizDetails, category: e.target.value });
        // }}
      />

      <Button onClick={handleClick} variant="solidPrimary">
        Add QUiz
      </Button>

      {/* <p></p>
      <p>Category</p>

      <input
        type="text"
        placeholder="category-name"
        onChange={(e) => {
          setCategoryDetails({ ...categoryDetails, name: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="category-image"
        onChange={(e) => {
          setCategoryDetails({ ...categoryDetails, image: e.target.value });
        }}
      />
      <Button onClick={handleCategory} variant="solidPrimary">
        Add Category
      </Button> */}
    </div>
  );
};
