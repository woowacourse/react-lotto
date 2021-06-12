import styled from 'styled-components';

export const ModalSection = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: ${props => props.backgroundColor};
  transition: ${props => props.transition};
`;

export const ModalInnerDiv = styled.div`
  position: relative;
  overflow: auto;
  border-radius: 5px;

  max-width: ${props => props.innerMaxWidth};
  background-color: ${props => props.innerBackgroundColor};
  margin: ${props => props.innerMargin};
  padding: ${props => props.innerPadding};
  transition: ${props => props.innerTransition};

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
  position: absolute;
  cursor: pointer;

  width: ${props => props.closeButtonWidth};
  height: ${props => props.closeButtonHeight};
  right: ${props => props.closeButtonRightPosition};
  top: ${props => props.closeButtonTopPosition};

  & svg {
    display: inline-block;
    margin: 0;
    padding: 0;

    & path {
      stroke: ${props => props.closeButtonPathStroke};
      stroke-width: ${props => props.closeButtonPathStrokeWidth};
    }
  }
`;

export const HiddenButtonName = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:active,
  hover {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;
