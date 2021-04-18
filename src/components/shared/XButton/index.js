import { Component } from 'react';
import './style.css';

export default class XButton extends Component {
  render() {
    return (
      <button type="button" className="close-button" onClick={this.props.onClick}>
        <svg viewBox="0 0 40 40">
          <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </button>
    );
  }
}
