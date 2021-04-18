import { Component } from 'react';
import './style.css';

export default class SubmitButton extends Component {
  render() {
    return (
      <button
        type="submit"
        className={`submit-button ${this.props.className}`}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}
