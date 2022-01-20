import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  }

  *::before,
  *::after {
  }

  html {
    font-family: trebuchet, geneva, sans-serif;
  }

  body, #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }
  
  @media screen and (min-width: 30rem) {
    body {
      max-width: 75rem;
      margin: auto;
    }
  }
`;
