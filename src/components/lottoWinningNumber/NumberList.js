import React from 'react';
import PropTypes from 'prop-types';
import {
  NumberListUl,
  WinningNumberCheckbox,
  WinningNumberLabel,
} from './NumberList.style';
import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

export const NumberList = ({ numbers, pickNumber }) => {
  const onPickNumber = num => e => {
    if (numbers.length === LOTTO.BUNDLE_SIZE && !numbers.includes(num)) {
      alert(MESSAGE.EXCEEDED_LOTTO_COUNT);
      return;
    }

    pickNumber(num);
  };

  return (
    <NumberListUl>
      {Array.from({ length: LOTTO.END_NUM }, (_, idx) => {
        return (
          <li key={idx + 1}>
            <WinningNumberCheckbox
              type="checkbox"
              id={`winningNumber${idx + 1}`}
              name={idx + 1}
              onChange={onPickNumber(idx + 1)}
              checked={numbers.includes(idx + 1)}
            />
            <WinningNumberLabel htmlFor={`winningNumber${idx + 1}`}>
              {idx + 1}
            </WinningNumberLabel>
          </li>
        );
      })}
    </NumberListUl>
  );
};

NumberList.propType = {
  numbers: PropTypes.array.isRequired,
  pickNumber: PropTypes.func.isRequired,
};

export default NumberList;
