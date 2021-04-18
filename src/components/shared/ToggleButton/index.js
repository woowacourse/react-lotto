import { Component } from 'react';
import './style.css';

export default class ToggleButton extends Component {
  render() {
    return (
      <div className="toggle-button-wrapper">
        <label htmlFor="toggle-button" className="toggle-button-label">
          <input id="toggle-button" type="checkbox" onChange={this.props.onChange} />
          <span className="toggle-button-text">{this.props.text}</span>
        </label>
      </div>
    );
  }
}
