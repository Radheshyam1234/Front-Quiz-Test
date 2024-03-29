import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizDataProvider } from "./Context/QuizContext/QuizDataProvider";
import { AuthProvider } from "./Context/AuthenticationContext/AuthProvider";
import App from "./App";

import { colors, fonts, components } from "./themeData";

const theme = extendTheme({
  colors,
  fonts,
  components,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <QuizDataProvider>
            <App />
          </QuizDataProvider>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
