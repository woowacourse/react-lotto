import React from "react";

const Modal = ({ isModalOpen, closeModal, children }) => {
  const onCloseButtonClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
      return;
    }

    if (target.closest(".modal-close")) {
      closeModal();
      return;
    }
  };

  return (
    <div
      className={`modal ${isModalOpen ? "open" : ""}`}
      onClick={onCloseButtonClick}
    >
      <div className="modal-inner p-10">
        <div className="modal-close">
          <svg viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
