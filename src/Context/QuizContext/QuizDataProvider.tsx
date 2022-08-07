import { createContext, useContext, useReducer } from "react";
import { quizDataReducer } from "./reducer/QuizDataReducer";

import { ContextType, InitialStateType } from "./ContextType";

const QuizDataContext = createContext<ContextType>({} as ContextType);

interface Props {
  children: React.ReactNode;
}

export const QuizDataProvider: React.FC<Props> = ({ children }) => {
  const initialState: InitialStateType = {
    categories: [],
    currentQuestionNumber: 1,
  };

  const [quizState, quizDispatch] = useReducer(quizDataReducer, initialState);
  return (
    <QuizDataContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizDataContext.Provider>
  );
};

export const useQuizData = () => useContext(QuizDataContext);
