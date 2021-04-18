import { Component } from 'react';
import './style.css';

export default class SubmitButton extends Component {
  render() {
    const { className, disabled, children } = this.props;

    return (
      <button type="submit" className={`SubmitButton ${className}`} disabled={disabled}>
        {children}
      </button>
    );
  }
}
