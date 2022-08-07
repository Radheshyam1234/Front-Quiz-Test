import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  LandingPage,
  SingleCategoryPage,
  Profile,
  PrivateRoute,
  Login,
  SignUp,
  QuizContainer,
} from "./Components";
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
        <Route path="/category/:categoryId" element={<SingleCategoryPage />} />
        <Route path="/quiz/:quizId" element={<QuizContainer />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
