import React, { Component } from 'react';
import Styled from './Modal.style';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.Dimmer onClick={this.props.onClose}>
        <Styled.Container>
          <Styled.CloseButton onClick={this.props.onClose}>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </Styled.CloseButton>
          {this.props.children}
        </Styled.Container>
      </Styled.Dimmer>
    );
  }
}

export default Modal;
