import React from 'react';
import PropTypes from 'prop-types';
import { WinningNumberInputLabel } from './styles.js';

const RoundNumberInput = ({ inputLabel, inputName, min, max }) => {
  return (
    <WinningNumberInputLabel>
      <span>{inputLabel ?? ''}</span>
      <input type="number" name={inputName ?? ''} min={min || ''} max={max || ''} required />
    </WinningNumberInputLabel>
  );
};

RoundNumberInput.propTypes = {
  inputLabel: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  inputName: PropTypes.string,
};

export default React.memo(RoundNumberInput);
