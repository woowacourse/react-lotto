import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  opacity: 1;
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

export const ModalInner = styled.div`
  transition: top 0.25s ease;
  width: 70vw;
  max-width: 400px;
  margin: auto;
  padding: 30px 50px;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalClose = styled.div`
  margin: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const Svg = styled.svg`
  display: inline-block;
  margin: 0;
  padding: 0;
  & path {
    stroke: gray;
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 5;
  }
`;
