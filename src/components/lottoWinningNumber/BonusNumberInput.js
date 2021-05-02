import React, { Component } from 'react';

import Flex from '../utils/Flex';

import { LOTTO } from '../../constants/lotto';

import {
  BonusNumberInputWrapperDiv,
  NumberInput,
} from './styles/BonusNumberInput.style';
class BonusNumberInput extends Component {
  render() {
    return (
      <BonusNumberInputWrapperDiv>
        <p>보너스 번호</p>
        <Flex justifyContent="center" alignItems="center">
          <NumberInput
            type="number"
            name="bonus-number"
            aria-label="winning number bonus"
            required
            min={LOTTO.START_NUM}
            max={LOTTO.END_NUM}
          />
        </Flex>
      </BonusNumberInputWrapperDiv>
    );
  }
}

export default BonusNumberInput;
