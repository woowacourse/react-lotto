import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WinningNumberInput.scss';

export default class WinningNumberInput extends Component {
  render() {
    return (
      <label className="WinningNumberInput">
        <span>{this.props.inputLabel ?? ''}</span>
        <input
          onChange={this.props.onChangeInput}
          name={this.props.inputName ?? ''}
          type="number"
          min={this.props.minNumber ?? ''}
          max={this.props.maxNumber ?? ''}
          required
        />
      </label>
    );
  }
}

WinningNumberInput.propTypes = {
  inputLabel: PropTypes.string,
  minNumber: PropTypes.number,
  maxNumber: PropTypes.number,
  inputName: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};
