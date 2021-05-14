import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextButton } from './styles';

const TextButton = ({ children, onClick, type, width, height, disabled }) => {
  return (
    <StyledTextButton onClick={onClick} type={type} width={width} height={height} disabled={disabled}>
      {children}
    </StyledTextButton>
  );
};

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
};

TextButton.defaultProps = {
  height: '50px',
  disabled: false,
};

export default TextButton;
