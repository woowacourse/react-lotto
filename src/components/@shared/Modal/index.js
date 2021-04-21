import React from 'react';
import { Root, ModalArea, ModalInner, CloseButton, CloseX } from './style';

export default function Modal({ isOpen, children, onCloseModal }) {
  const handleClickDimmedArea = (event) => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  return (
    <Root>
      <ModalArea isOpen={isOpen} onClick={handleClickDimmedArea}>
        <ModalInner>
          <CloseButton onClick={onCloseModal}>
            <svg viewBox="0 0 40 40">
              <CloseX d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </CloseButton>
          {children}
        </ModalInner>
      </ModalArea>
    </Root>
  );
}
