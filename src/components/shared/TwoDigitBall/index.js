import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);
export default class TwoDigitBall extends Component {
  render() {
    const { className, children } = this.props;
    const TwoDigitBallClass = cx({
      TwoDigitBall: true,
      [`${className}`]: true,
    });
    const numberText = children < 10 ? `0${children}` : children;

    return <span className={TwoDigitBallClass}>{numberText}</span>;
  }
}
