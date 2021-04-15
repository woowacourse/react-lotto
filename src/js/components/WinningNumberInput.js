import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WinningNumberInput extends Component {
  render() {
    return (
      <label>
        <span>{this.props.inputLabel ?? ''}</span>
        <input type="number" min={this.props.minNumber ?? ''} max={this.props.maxNumber ?? ''} required />
      </label>
    );
  }
}

WinningNumberInput.propTypes = {
  inputLabel: PropTypes.string,
  minNumber: PropTypes.number,
  maxNumber: PropTypes.number,
};
