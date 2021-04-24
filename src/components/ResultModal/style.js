import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Modal = styled.div`
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

const CloseButton = styled.div`
  margin: 20px;
  width: 20px;
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

const Title = styled.h2``;

const Table = styled.table`
  border-width: 1px;
  border-color: black;
  border-collapse: collapse;
  overflow: hidden;
`;

const Thead = styled.thead``;

const Tr = styled.tr`
  text-align: center;
`;

const Th = styled.th`
  padding: 0.75rem;
  border-bottom: 1px solid gainsboro;
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid gainsboro;
`;

const EarningRate = styled.p`
  text-align: center;
  font-weight: 700;
`;

const RestartButtonWrapper = styled.div``;

const RestartButton = styled.button`
  width: 128px;
  height: 36px;
  border: none;
  border-radius: 5px;
  background-color: #ffa02b;
  cursor: pointer;
`;

export {
  Root,
  Modal,
  ModalInner,
  CloseButton,
  CloseX,
  Title,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  EarningRate,
  RestartButton,
};
