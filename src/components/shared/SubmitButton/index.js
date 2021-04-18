/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);
export default class SubmitButton extends Component {
  render() {
    const { className, children, ...props } = this.props;
    const submitButtonClass = cx({
      SubmitButton: true,
      [`${className}`]: true,
    });

    return (
      <button type="submit" className={submitButtonClass} {...props}>
        {children}
      </button>
    );
  }
}
