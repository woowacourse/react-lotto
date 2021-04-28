import React from 'react';
import PropTypes from 'prop-types';

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function CloseButton({ onClick }) {
  return (
    <button
      className="modal-close absolute right-2 top-2 m-4 w-6 focus:outline-none cursor-pointer focus:ring-blue-700 focus:ring-1.5"
      role="switch"
      aria-checked="false"
      aria-label="modal-close"
      onClick={onClick}
    >
      <svg className="text-blue-500 hover:text-blue-700 stroke-current stroke-5" viewBox="0 0 40 40">
        <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </button>
  );
}
