import React from 'react';
import PropTypes from 'prop-types';

import { ModalSection, ModalInnerDiv, ModalCloseButton } from './Modal.style';

export const Modal = ({ children, onCloseModal, closeModal }) => {
  return (
    <ModalSection
      role="dialog"
      aria-modal="true"
      aria-labelledby="title-dialog"
      onClick={onCloseModal}
    >
      <ModalInnerDiv>
        <ModalCloseButton
          type="button"
          aria-label="close-button"
          onClick={() => {
            closeModal();
          }}
        >
          <ModalCloseIcon />
        </ModalCloseButton>
        {children}
      </ModalInnerDiv>
    </ModalSection>
  );
};

const ModalCloseIcon = () => {
  return (
    <svg viewBox="0 0 40 40">
      <path d="M 10, 10 L 30,30 M 30,10 L 10,30" />
    </svg>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
