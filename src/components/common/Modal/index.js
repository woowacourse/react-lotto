import PropTypes from 'prop-types';
import React from 'react';
import { CloseButton, CloseIcon, ModalContainer, ModalInner } from './styles';

const Modal = ({ children, onClose }) => {
  const onCloseWithDimmed = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer role="dialog" onClick={onCloseWithDimmed}>
      <ModalInner>
        <CloseButton type="button" onClick={onClose}>
          <CloseIcon viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </CloseIcon>
        </CloseButton>

        {children}
      </ModalInner>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
