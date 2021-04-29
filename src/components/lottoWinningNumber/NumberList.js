import React, { Component } from 'react';

import { LOTTO } from '../../constants/lotto';

import {
  NumberListUl,
  WinningNumberCheckbox,
  WinningNumberLabel,
} from './styles/NumberList.style';

class NumberList extends Component {
  render() {
    const { numbers, handleChangeNumbers } = this.props;

    return (
      <NumberListUl>
        {Array.from({ length: LOTTO.END_NUM }, (_, idx) => {
          return (
            <li key={idx + 1}>
              <WinningNumberCheckbox
                type="checkbox"
                id={`winningNumber${idx + 1}`}
                name={idx + 1}
                onChange={({ target }) =>
                  handleChangeNumbers(Number(target.name))
                }
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
  }
}

export default NumberList;
