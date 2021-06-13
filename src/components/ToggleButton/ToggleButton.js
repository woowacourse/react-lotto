import React, { Component } from 'react';

import { Flex } from '..';

import {
  ToggleButtonInput,
  ToggleButtonLabel,
  ToggleButtonSpan,
} from './ToggleButton.style';

export class ToggleButton extends Component {
  render() {
    const { setIsShowNumbers } = this.props;

    return (
      <Flex alignItems="center">
        <ToggleButtonInput
          id="show-details"
          onChange={setIsShowNumbers}
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
