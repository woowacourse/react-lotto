import styled from 'styled-components';

export const ModalSection = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
`;

export const ModalInnerDiv = styled.div`
  position: relative;
  overflow: auto;

  ${({ css }) => css}

  @media screen and (max-width: 768px) {
    .modal-inner {
      width: 90%;
      height: 90%;
      box-sizing: border-box;
    }
  }
`;
