import styled from 'styled-components';

export const ModalSection = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.25s ease;
  z-index: 2;
`;

export const ModalInnerDiv = styled.div`
  overflow: auto;
  position: relative;

  ${({ css }) => css}

  @media screen and (max-width: 768px) {
    .modal-inner {
      width: 90%;
      height: 90%;
      box-sizing: border-box;
    }
  }
`;
