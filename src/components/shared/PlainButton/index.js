import { Component } from 'react';
import './style.css';

export default class PlainButton extends Component {
  render() {
    const { className, onClick, text } = this.props;

    return (
      <button type="button" className={`PlainButton ${className}`} onClick={onClick}>
        {text}
      </button>
    );
  }
}
