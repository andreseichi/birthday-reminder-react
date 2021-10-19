import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-light: #91C4F2;
    --blue: #8CA0D7;
    --purple-light: #9D79BC;
    --purple: #A14DA0;

    --text-title: #363f5f;
    --text-body: #48527a;

    --background: #9D79BC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
  }
`;
