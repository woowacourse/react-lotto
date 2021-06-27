import React from 'react';
import './style.scss';

const ToggleButton = ({ onToggle }) => (
  <label className='switch'>
    <input type='checkbox' onClick={onToggle} />
    <span className='slider round'></span>
  </label>
);

export default ToggleButton;
