import React, { Component } from 'react';

class ToggleButton extends Component {
  handleToggedButton = e => {
    this.props.setIsToggled(e.target.checked);
  };

  render() {
    return (
      <div style={{ paddingRight: '0.1rem' }}>
        <label>
          <span style={{ lineHeight: '2rem' }}>번호보기</span>
          <input onChange={this.handleToggedButton} type="checkbox" />
        </label>
      </div>
    );
  }
}

export default ToggleButton;
