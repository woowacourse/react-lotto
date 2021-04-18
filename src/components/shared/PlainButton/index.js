/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import './style.css';

export default class Button extends Component {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <button type="button" className={`PlainButton ${className}`} {...props}>
        {children}
      </button>
    );
  }
}
