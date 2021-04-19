import React from 'react';
import Styled from './Modal.style';

const Modal = (props) => (
  <Styled.Dimmer onClick={props.onClose}>
    <Styled.Container>
      <Styled.CloseButton onClick={props.onClose}>
        <svg viewBox="0 0 40 40">
          <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </Styled.CloseButton>
      {props.children}
    </Styled.Container>
  </Styled.Dimmer>
);

Modal.Title = ({ children }) => <Styled.Title>{children}</Styled.Title>;

Modal.defaultProps = {
  onClose: () => {},
};

export default Modal;
