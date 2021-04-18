import { Component } from 'react';
import './style.css';

export default class XButton extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className="XButton" onClick={onClick}>
        <svg className="XButton__svg" viewBox="0 0 40 40">
          <path className="XButton__svg_path" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </button>
    );
  }
}
