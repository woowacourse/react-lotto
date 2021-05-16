import React from "react";

const Modal = (props) => {
  const { isModalOpen, closeModal, children } = props;

  return (
    <div className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-inner p-10">
        <div className="modal-close" onClick={closeModal}>
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
