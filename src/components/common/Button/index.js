import React from 'react';
import './style.scss';

const Button = ({ customClass, children, ...rest }) => (
  <button className={`submit-button ${customClass}`} {...rest}>
    {children}
  </button>
);

export default Button;
