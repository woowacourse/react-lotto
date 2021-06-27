import React from 'react';
import './style.scss';

const NumberInput = React.forwardRef(({ customClass, ...rest }, ref) => (
  <input ref={ref} className={`number-input ${customClass}`} type='number' required {...rest} />
));

export default NumberInput;
