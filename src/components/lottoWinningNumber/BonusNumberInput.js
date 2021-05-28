import React, { Component } from 'react';

import { LOTTO } from '../../constants/lotto';

import {
  BonusNumberInputWrapperDiv,
  NumberInputDiv,
  NumberInput,
} from './BonusNumberInput.style';
class BonusNumberInput extends Component {
  render() {
    return (
      <BonusNumberInputWrapperDiv>
        <p>보너스 번호</p>
        <NumberInputDiv>
          <NumberInput
            type="number"
            name="bonus-number"
            aria-label="winning number bonus"
            required
            min={LOTTO.START_NUM}
            max={LOTTO.END_NUM}
          />
        </NumberInputDiv>
      </BonusNumberInputWrapperDiv>
    );
  }
}

export default BonusNumberInput;
