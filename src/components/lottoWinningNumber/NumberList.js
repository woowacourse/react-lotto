import React, { Component } from 'react';

import {
  NumberListUl,
  WinningNumberCheckbox,
  WinningNumberLabel,
} from './NumberList.style';

class NumberList extends Component {
  handlePickNumber = e => {
    const pickedNumber = Number(e.target.name);
    const duplicatedNumber = this.props.numbers.find(
      number => number === pickedNumber,
    );
    const prevNumbers = this.props.numbers;

    const newNumbers = duplicatedNumber
      ? prevNumbers.filter(number => number !== pickedNumber)
      : [...prevNumbers, pickedNumber];

    if (newNumbers.length === 7) {
      alert('이미 6개의 숫자를 선택하였습니다.');
      return;
    }

    this.props.setNumbers(newNumbers);
  };

  render() {
    const currentNumbers = this.props.numbers;

    return (
      <NumberListUl>
        {Array.from({ length: 45 }, (_, idx) => {
          return (
            <li key={idx + 1}>
              <WinningNumberCheckbox
                type="checkbox"
                id={`winningNumber${idx + 1}`}
                name={idx + 1}
                onChange={this.handlePickNumber}
                checked={currentNumbers.includes(idx + 1)}
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
