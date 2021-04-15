import React, { Component } from 'react';
import { LOTTO_NUMBER_SEPARATOR } from '../constants/display.js';

export default class Lotto extends Component {
  render() {
    return (
      <div className="lotto">
        <span className="lotto-emoji">🎟️</span>
        <span className="lotto-number">
          {this.props.numbers.map((v) => (v < 10 ? `0${v}` : v)).join(LOTTO_NUMBER_SEPARATOR)}
        </span>
      </div>
    );
  }
}
