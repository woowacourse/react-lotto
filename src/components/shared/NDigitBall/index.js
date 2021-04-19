import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);
export default class NDigitBall extends Component {
  render() {
    const { className, children, n } = this.props;
    const NDigitBallClass = cx({
      NDigitBall: true,
      [`${className}`]: true,
    });

    return <span className={NDigitBallClass}>{children.toString().padStart(n, '0')}</span>;
  }
}
