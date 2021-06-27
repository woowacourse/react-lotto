import React, { createContext, useState } from 'react';
import { hideScroll, showScroll } from '../utils/scroll';

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    hideScroll('modal-opened');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    showScroll('modal-opened');
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
export { ModalContext };
