/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default class Button extends Component {
  render() {
    const { className, children, ...props } = this.props;
    const buttonClass = cx({
      Button: true,
      [`${className}`]: true,
    });

    return (
      <button className={buttonClass} {...props}>
        {children}
      </button>
    );
  }
}
