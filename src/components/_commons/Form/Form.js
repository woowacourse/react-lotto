import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { StyledForm } from './Form.style';

export const Form = forwardRef((props, ref) => {
  return <StyledForm ref={ref} {...props} />;
});

Form.prototype = {
  onSubmit: PropTypes.func,
  css: PropTypes.object,
};
