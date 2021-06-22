import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledInput } from './Input.style';

export const Input = forwardRef((props, ref) => {
  const { onChange, ...rest } = props;

  const handleChangeBonusNumber = ({ target: { value } }) => {
    value = Number(value) === 0 ? '' : Number(value);

    onChange(value);
  };

  return (
    <StyledInput
      ref={ref}
      onChange={onChange ? handleChangeBonusNumber : undefined}
      {...rest}
    />
  );
});

Input.prototype = {
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.number,
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
