import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    margin: 0;
    height: 100%;
    font-size: 16px;
  }
`;

export default GlobalStyle;
