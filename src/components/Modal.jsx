import React from 'react';
import PropTypes from 'prop-types';
import WinningResult from './WinningResult';

Modal.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default function Modal(props) {
  const handleCloseKeyUp = ({ key }) => {
    const keys = ['Enter', ' '];

    if (keys.includes(key)) {
      props.onCloseClick();
    }
  };

  return (
    <div className="modal fixed inset-0 flex w-full bg-black bg-opacity-50" role="dialog" aria-modal="true">
      <div className="modal-inner relative m-auto p-10 bg-white rounded-xl">
        <button
          className="modal-close absolute right-2 top-2 m-4 w-6 focus:outline-none cursor-pointer focus:ring-blue-700 focus:ring-1.5"
          role="switch"
          aria-checked="false"
          aria-label="modal-close"
          onKeyUp={handleCloseKeyUp}
          onClick={props.onCloseClick}
        >
          <svg className="text-blue-500 hover:text-blue-700 stroke-current stroke-5" viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <WinningResult {...props} />
      </div>
    </div>
  );
}
