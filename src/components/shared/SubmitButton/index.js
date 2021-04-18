/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import './style.css';

export default class SubmitButton extends Component {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <button type="submit" className={`SubmitButton ${className}`} {...props}>
        {children}
      </button>
    );
  }
}
