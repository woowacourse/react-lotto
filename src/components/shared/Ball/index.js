import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);
export default class Ball extends Component {
  render() {
    const { className, children } = this.props;
    const BallClass = cx({
      Ball: true,
      [`${className}`]: true,
    });

    return <span className={BallClass}>{children}</span>;
  }
}
