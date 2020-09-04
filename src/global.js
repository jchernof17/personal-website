import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important;
  }

  /* .active.tab, .content-box {
      color: ${({ theme }) => theme.text} !important;
      background: ${({ theme }) => theme.body};
      border-color: ${({ theme }) => theme.borderColor}
  } */
  
  `;
