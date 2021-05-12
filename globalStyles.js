import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');


  :root {
    --color-pink-1: rgb(255, 154, 179);
    --color-pink-2: rgb(255, 128, 159);
    --color-pink-3: rgb(243, 102, 137);
  }

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

  .d-none {
    display: none;
  }

  .d-flex {
    display: flex;
  }
`;

export default GlobalStyle;
