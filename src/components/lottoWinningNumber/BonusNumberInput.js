import React, { Component } from 'react';

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
            min="1"
            max="45"
          />
        </NumberInputDiv>
      </BonusNumberInputWrapperDiv>
    );
  }
}

export default BonusNumberInput;
