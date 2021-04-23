import { css } from 'styled-components';

export const CUSTOM_SCROLLBAR = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(184, 184, 184);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(151, 151, 151);
  }
`;
