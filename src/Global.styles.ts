import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  ul {
    margin: 0;
    height: 100%;
    font-size: 16px;
    padding: 0;
  }
  * {
    box-sizing: border-box;    
  }
`;

export default GlobalStyle;
