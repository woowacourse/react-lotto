import { Component } from 'react';
import './style.css';

export default class Record extends Component {
  render() {
    const { label, children } = this.props;

    return (
      <p className="Record">
        <span className="Record__label">{label}</span>
        <span className="Record__value">{children}</span>
      </p>
    );
  }
}
