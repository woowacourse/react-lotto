import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 550px;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
