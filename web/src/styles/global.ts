import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  :root {
    --bg-body: #171923;

    --gray-light: #2D3748;
    --blue-light: #3182CE;

    --text-regular: #E2E8F0;
    --text-fade: #A0AEC0;
    --text-error: #ff3333;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #__next {
    background: var(--bg-body); 
    min-height: 100vh;
    height: 100%;

    display: flex;
    flex-direction: column;
    /* flex: 1; */
  
    @media (max-width: 380px) {
      margin: 0 auto;
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    outline: none;
  }

`;
