import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, LandingPage } from "./Components";
import { API_URL } from "./utilities/constants";
import { useQuizData } from "./Context/QuizContext/QuizDataProvider";
import axios from "axios";

const App = () => {
  const { quizDispatch } = useQuizData();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { response },
        } = await axios({
          method: "GET",
          url: `${API_URL}/quizCategories`,
        });
        quizDispatch({
          type: "SET_CATEGORIES",
          payload: response,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
