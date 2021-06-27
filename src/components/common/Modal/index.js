import React, { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContextProvider';
import './style.scss';

const Modal = ({ children }) => {
  const { closeModal } = useContext(ModalContext);

  const onClickDimmer = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className='modal' onClick={onClickDimmer}>
      {children}
    </div>
  );
};

export default Modal;
