import { Component } from 'react';
import './style.css';

export default class TwoDigitBall extends Component {
  render() {
    const { number } = this.props;
    const numberText = number < 10 ? `0${number}` : number;

    return <span className={`ball ${this.props.className}`}>{numberText}</span>;
  }
}
