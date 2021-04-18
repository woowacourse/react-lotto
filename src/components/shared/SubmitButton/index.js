import { Component } from 'react';
import './style.css';

export default class SubmitButton extends Component {
  render() {
    const { className, disabled, text } = this.props;

    return (
      <button type="submit" className={`SubmitButton ${className}`} disabled={disabled}>
        {text}
      </button>
    );
  }
}
