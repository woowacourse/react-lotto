import React from 'react';
import './style.scss';

const NumberInput = ({
  customClass,
  onInputFocusOut,
  onInputChange,
  isCurrentInput,
  ...attributes
}) => {
  return (
    <input
      onBlur={onInputFocusOut}
      onChange={onInputChange}
      className={`number-input ${customClass}`}
      type='number'
      {...attributes}
      autoFocus={isCurrentInput ? 'autoFocus' : ''}
      required
    />
  );
};

export default NumberInput;
