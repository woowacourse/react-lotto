import React, { Component } from 'react';

import Flex from '../utils/Flex';

import {
  ToggleButtonInput,
  ToggleButtonLabel,
  ToggleButtonSpan,
} from './styles/ToggleButton.style';

class ToggleButton extends Component {
  render() {
    const { setIsToggled } = this.props;

    return (
      <Flex alignItems="center">
        <ToggleButtonInput
          id="show-details"
          onChange={setIsToggled}
          type="checkbox"
        />

        <ToggleButtonLabel htmlFor="show-details">
          <span>번호보기</span>
          <ToggleButtonSpan id="show-number-span"></ToggleButtonSpan>
        </ToggleButtonLabel>
      </Flex>
    );
  }
}

export default ToggleButton;
