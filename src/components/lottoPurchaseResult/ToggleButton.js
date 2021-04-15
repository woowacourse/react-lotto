import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    return (
      <div style={{ paddingRight: '0.1rem' }}>
        <label>
          <span style={{ lineHeight: '2rem' }}>번호보기</span>
          <input type="checkbox" />
        </label>
      </div>
    );
  }
}

export default ToggleButton;
