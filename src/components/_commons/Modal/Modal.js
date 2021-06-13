import React from 'react';

import { ModalSection, ModalInnerDiv } from './Modal.style';
import { ModalCloseButton } from '../../CloseButton/CloseButton';

export const Modal = props => {
  const { children, onClick, ...rest } = props;

  const handleCloseModal = ({ currentTarget, target }) => {
    const isDimmedClicked = currentTarget === target;

    if (!isDimmedClicked) return;
    onClick();
  };

  return (
    <ModalSection
      role="dialog"
      aria-modal="true"
      aria-labelledby="title-dialog"
      onClick={handleCloseModal}
    >
      <ModalInnerDiv {...rest}>
        <ModalCloseButton onClick={onClick} />
        {children}
      </ModalInnerDiv>
    </ModalSection>
  );
};
