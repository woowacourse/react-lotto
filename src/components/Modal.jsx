import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';

const Modal = (props) => {
  const ref = React.createRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleDimmedClick = (event) => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Escape') {
      props.onClose();
    }
  };

  return (
    <div
      className="modal fixed inset-0 flex w-full bg-black bg-opacity-50"
      role="presentation"
      tabIndex="-1"
      onKeyUp={handleKeyUp}
      onClick={handleDimmedClick}
      ref={ref}
    >
      <div className="modal-inner relative m-auto p-10 bg-white rounded-xl">
        <CloseButton onClick={props.onClose} />
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
