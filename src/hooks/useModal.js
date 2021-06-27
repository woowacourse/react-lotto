import { useState } from 'react';

const useModal = (opened = false) => {
  const [isModalOpened, setIsModalOpened] = useState(opened);

  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpened(false);
    }
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return {
    isModalOpened,
    onCloseModal,
    openModal,
    closeModal,
  };
};

export default useModal;
