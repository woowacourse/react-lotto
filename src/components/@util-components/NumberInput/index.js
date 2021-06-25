import React from 'react';
import './style.scss';

const NumberInput = ({ customClass, onInputFocusOut, ...attributes }) => {
  return (
    <input
      onBlur={onInputFocusOut}
      className={`number-input ${customClass}`}
      type='number'
      {...attributes}
      required
    />
  );
};

export default NumberInput;
