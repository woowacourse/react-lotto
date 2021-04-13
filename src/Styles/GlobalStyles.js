import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
    }

    html,body {
        margin: 0;
    }

    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
    }

    a{
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyles;
