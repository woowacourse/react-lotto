import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalArea = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
  z-index: 2;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: top 0.25s ease;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;
  padding: 2.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  margin: 20px;
  width: 32px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const CloseX = styled.path`
  stroke: gray;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
`;

export { Root, ModalArea, ModalInner, CloseButton, CloseX };
