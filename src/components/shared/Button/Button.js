import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';

const Button = ({ children, onClick, size, ...props }) => {
  return (
    <StyledButton onClick={onClick} size="small" {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
