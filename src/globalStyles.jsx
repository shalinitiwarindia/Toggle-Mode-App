// src/globalStyles.js
import { createGlobalStyle } from "styled-components";
import { useTheme } from "./context/ThemeProvider";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#121212" : "#ffffff"};
    color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#000000")};
    font-family: Arial, sans-serif;
    transition: all 0.25s linear;
  }
`;
