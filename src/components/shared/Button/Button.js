import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';

const Button = ({ children, size = 'small', ...props }) => {
  return (
    <StyledButton size={size} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
