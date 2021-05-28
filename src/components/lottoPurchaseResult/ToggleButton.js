import React, { Component } from 'react';

import {
  ToggleButtonDiv,
  ToggleButtonInput,
  ToggleButtonLabel,
  ToggleButtonSpan,
} from './ToggleButton.style';

class ToggleButton extends Component {
  handleToggedButton = e => {
    this.props.setIsToggled(e.target.checked);
  };

  render() {
    return (
      <ToggleButtonDiv>
        <ToggleButtonInput
          id="show-details"
          onChange={this.handleToggedButton}
          type="checkbox"
        />

        <ToggleButtonLabel htmlFor="show-details">
          <span>번호보기</span>
          <ToggleButtonSpan id="show-number-span"></ToggleButtonSpan>
        </ToggleButtonLabel>
      </ToggleButtonDiv>
    );
  }
}

export default ToggleButton;
