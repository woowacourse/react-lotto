import React, { Component } from 'react';

import {
  ModalSection,
  ModalInnerDiv,
  ModalCloseButton,
} from './styles/Modal.style';

class Modal extends Component {
  handleCloseModal = ({ currentTarget, target }) => {
    const isDimmedClicked = currentTarget === target;
    const isCloseButtonClicked = target.classList.contains('close-modal');

    if (!isDimmedClicked && !isCloseButtonClicked) return;
    this.props.handleModalClosed();
  };

  render() {
    const { children } = this.props;

    return (
      <ModalSection
        role="dialog"
        aria-modal="true"
        aria-labelledby="title-dialog"
        onClick={this.handleCloseModal}
      >
        <ModalInnerDiv>
          <ModalCloseButton
            className="close-modal"
            type="button"
            aria-label="close-button"
            onClick={this.handleCloseModal}
          >
            <svg className="close-modal" viewBox="0 0 40 40">
              <path
                className="close-modal"
                d="M 10, 10 L 30,30 M 30,10 L 10,30"
              />
            </svg>
          </ModalCloseButton>
          {children}
        </ModalInnerDiv>
      </ModalSection>
    );
  }
}

export default Modal;
