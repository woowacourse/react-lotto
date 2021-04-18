import { Component } from 'react';
import './style.css';

export default class TwoDigitBall extends Component {
  render() {
    const { number, className } = this.props;
    const numberText = number < 10 ? `0${number}` : number;

    return <span className={`TwoDigitBall ${className}`}>{numberText}</span>;
  }
}
