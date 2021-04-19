import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './WinningNumberInput.scss';

const WinningNumberInput = memo((props) => (
  <label className="WinningNumberInput">
    <span>{props.inputLabel ?? ''}</span>
    <input
      onChange={props.onChangeInput}
      name={props.inputName ?? ''}
      type="number"
      min={props.minNumber ?? ''}
      max={props.maxNumber ?? ''}
      required
    />
  </label>
));

WinningNumberInput.propTypes = {
  inputLabel: PropTypes.string,
  minNumber: PropTypes.number,
  maxNumber: PropTypes.number,
  inputName: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};

export default WinningNumberInput;
