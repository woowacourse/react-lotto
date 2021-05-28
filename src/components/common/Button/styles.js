import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const StyledTextButton = styled.button`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  background-color: ${PALETTE.PINK_001};
  border: none;
  padding: 0 1.5rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${PALETTE.PINK_003};
  }

  &:disabled {
    background-color: ${PALETTE.GRAY_007};
    color: ${PALETTE.GRAY_003};
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: ${PALETTE.GRAY_007};
  }
`;
