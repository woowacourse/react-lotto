import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { StyledInput } from './Input.style';

export const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

Input.prototype = {
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  css: PropTypes.object,
};

Input.defaultProps = {
  type: 'text',
  required: true,
};
