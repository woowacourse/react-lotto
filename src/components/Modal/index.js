import React from 'react';

const Modal = props => {
  return (
    <div className="modal open">
      <div className="modal-inner p-10">
        <div className="modal-close">
          <svg viewBox="0 0 40 40" onClick={props.closeModal}>
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>
        {props.container}
      </div>
    </div>
  );
};

export default Modal;
