import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

export const Button = props => {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,

  size: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
  size: 'SMALL',
};
