import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const ModalContainer = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${PALETTE.BLACK_TRANSPARENT};
  z-index: 2;
`;

export const ModalInner = styled.div`
  width: 500px;
  max-height: 85vh;
  margin: auto;
  padding: 4rem 3rem;
  overflow: auto;
  background: white;
  border-radius: 5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
`;

export const CloseButton = styled.button`
  margin: 25px;
  width: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0;
`;

export const CloseIcon = styled.svg`
  stroke: gray;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
`;
