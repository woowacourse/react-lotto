import React from 'react';
import './style.scss';

const Modal = ({ onModalClose, children }) => {
  const onClickDimmer = (e) => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return (
    <div className='modal' onClick={onClickDimmer}>
      {children}
    </div>
  );
};

export default Modal;
