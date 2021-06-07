import React from 'react';
import './style.scss';

const Button = ({ children, buttonText, customClass, ...attributes }) => {
  return (
    <button className={`submit-button ${customClass}`} {...attributes}>
      {buttonText && buttonText}
      {children && children}
    </button>
  );
};

export default Button;
