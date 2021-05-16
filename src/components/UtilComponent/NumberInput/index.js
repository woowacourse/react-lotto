import React from 'react';
import './style.scss';

const NumberInput = React.forwardRef((props, ref) => {
  const { customClass, ...rest } = props;
  return (
    <input ref={ref} className={`number-input ${customClass}`} type='number' {...rest} required />
  );
});

export default NumberInput;
