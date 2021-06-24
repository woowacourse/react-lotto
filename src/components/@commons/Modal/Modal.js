import PropTypes from 'prop-types';
import React from 'react';

import { ModalInnerDiv, ModalSection } from './Modal.style';
import { ModalCloseButton } from './ModalCloseButton/ModalCloseButton';

export const Modal = props => {
  const { children, onCloseModal, setIsModalOpen, ...rest } = props;

  const handleCloseModal = ({ currentTarget, target }) => {
    const isDimmedClicked = currentTarget === target;

    if (!isDimmedClicked) return;
    setIsModalOpen(false);
  };

  return (
    <ModalSection
      role="dialog"
      aria-modal="true"
      aria-labelledby="title-dialog"
      onClick={handleCloseModal}
    >
      <ModalInnerDiv {...rest}>
        {onCloseModal && <ModalCloseButton onClick={onCloseModal} />}
        {children}
      </ModalInnerDiv>
    </ModalSection>
  );
};

Modal.prototype = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func,
  setIsModalOpen: PropTypes.func.isRequired,
  css: PropTypes.object,
};
