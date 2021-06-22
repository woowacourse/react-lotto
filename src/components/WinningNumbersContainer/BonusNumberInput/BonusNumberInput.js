import React from 'react';

import { LOTTO } from '../../../constants';
import { Flex, Input } from '../..';
import { BonusNumberWrapper, InputCss } from './BonusNumberInput.style';

export const BonusNumberInput = () => {
  return (
    <BonusNumberWrapper>
      <p>보너스 번호</p>
      <Flex justifyContent="center" alignItems="center">
        <Input
          type="number"
          name="bonus-number"
          aria-label="winning number bonus"
          required
          min={LOTTO.START_NUM}
          max={LOTTO.END_NUM}
          css={InputCss}
        />
      </Flex>
    </BonusNumberWrapper>
  );
};
