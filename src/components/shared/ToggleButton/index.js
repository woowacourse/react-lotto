/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';
import './style.css';

export default class ToggleButton extends Component {
  render() {
    const { onChange, children } = this.props;

    return (
      <div className="ToggleButton">
        <label className="ToggleButton__label">
          <input type="checkbox" className="ToggleButton__input" onChange={onChange} />
          <span className="ToggleButton__text">{children}</span>
        </label>
      </div>
    );
  }
}
