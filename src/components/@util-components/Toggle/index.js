import React from 'react';
import './style.scss';

const ToggleButton = ({ onHandleToggle }) => {
  return (
    <label className='switch'>
      <input type='checkbox' onClick={onHandleToggle} />
      <span className='slider round'></span>
    </label>
  );
};

export default ToggleButton;
