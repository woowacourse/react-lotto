import { css } from 'styled-components';
import PALETTE from '../constants/palette';

export const CUSTOM_SCROLLBAR = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${PALETTE.GRAY_011};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${PALETTE.GRAY_008};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${PALETTE.GRAY_006};
  }
`;
