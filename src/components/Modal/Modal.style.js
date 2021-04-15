import styled from '@emotion/styled';

const Styled = {
  Dimmer: styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    position: relative;
    z-index: 2;
    width: 80%;
    max-width: 500px;
    background-color: white;
    min-height: 300px;
    padding: 1rem;
  `,
  CloseButton: styled.button`
    margin: 10px;
    width: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    background: none;
    border: none;

    svg {
      display: block;
      pointer-events: none;
    }

    .close-x {
      stroke: gray;
      fill: transparent;
      stroke-linecap: round;
      stroke-width: 5;
      pointer-events: none;
    }
  `,
};

export default Styled;
