import styled from 'styled-components';

export const ModalSection = styled.section`
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

export const ModalInnerDiv = styled.div`
  transition: top 0.25s ease;
  max-width: 350px;
  margin: auto;
  padding: 2.5rem;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;

  @media screen and (max-width: 768px) {
    .modal-inner {
      width: 90%;
      height: 90%;
      box-sizing: border-box;
    }
  }
`;

export const ModalCloseButton = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 40px;
  top: 40px;
  cursor: pointer;

  & svg {
    display: inline-block;
    margin: 0;
    padding: 0;

    & path {
      stroke: gray;
      fill: transparent;
      stroke-linecap: round;
      stroke-width: 5;
    }
  }
`;
