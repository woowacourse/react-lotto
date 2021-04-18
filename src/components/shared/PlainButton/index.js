import { Component } from 'react';
import './style.css';

export default class PlainButton extends Component {
  render() {
    const { className, text, ...props } = this.props;

    return (
      <button type="button" className={`PlainButton ${className}`} {...props}>
        {text}
      </button>
    );
  }
}
