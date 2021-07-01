import React from 'react';
import PropTypes from 'prop-types';
import {
  BonusNumberInputWrapperDiv,
  NumberInputDiv,
  NumberInput,
} from './BonusNumberInput.style';
import { LOTTO } from '../../constants/lotto';

export const BonusNumberInput = ({ changeBonusNumber }) => {
  const onChange = e => {
    changeBonusNumber(Number(e.target.value));
  };

  return (
    <BonusNumberInputWrapperDiv>
      <p>보너스 번호</p>
      <NumberInputDiv>
        <NumberInput
          type="number"
          name="bonus-number"
          onChange={onChange}
          aria-label="winning number bonus"
          min={LOTTO.START_NUM}
          max={LOTTO.END_NUM}
          required
        />
      </NumberInputDiv>
    </BonusNumberInputWrapperDiv>
  );
};

BonusNumberInput.propTypes = {
  changeBonusNumber: PropTypes.func.isRequired,
};

export default BonusNumberInput;
