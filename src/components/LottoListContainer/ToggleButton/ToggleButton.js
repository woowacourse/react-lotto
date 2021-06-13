import React from 'react';

import { Flex } from '../..';

import {
  ToggleButtonInput,
  ToggleButtonLabel,
  ToggleButtonSpan,
} from './ToggleButton.style';

export const ShowNumberToggleButton = props => {
  const { onChange } = props;

  return (
    <Flex alignItems="center">
      <ToggleButtonInput
        id="show-details"
        onChange={onChange}
        type="checkbox"
      />

      <ToggleButtonLabel htmlFor="show-details">
        <span>번호보기</span>
        <ToggleButtonSpan id="show-number-span"></ToggleButtonSpan>
      </ToggleButtonLabel>
    </Flex>
  );
};
