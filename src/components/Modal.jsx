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
    <div className="modal w-full flex fixed inset-0 bg-black bg-opacity-50" role="dialog" aria-modal="true">
      <div className="modal-inner p-10 m-auto relative rounded-xl bg-white">
        <button
          className="modal-close absolute m-4 w-6 top-2 right-2 cursor-pointer focus:outline-none focus:ring-1.5 focus:ring-blue-700"
          role="switch"
          aria-checked="false"
          aria-label="modal-close"
          onKeyUp={handleCloseKeyUp}
          onClick={props.onCloseClick}
        >
          <svg className="stroke-current text-blue-500 hover:text-blue-700 stroke-5" viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <WinningResult {...props} />
      </div>
    </div>
  );
}
