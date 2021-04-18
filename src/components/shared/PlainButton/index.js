/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default class Button extends Component {
  render() {
    const { className, children, ...props } = this.props;
    const plainButtonClass = cx({
      PlainButton: true,
      [`${className}`]: true,
    });

    return (
      <button type="button" className={plainButtonClass} {...props}>
        {children}
      </button>
    );
  }
}
