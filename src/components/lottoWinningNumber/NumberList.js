import React, { Component } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  text-align: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + Label {
    border: 2px solid #c71f1f;
    background-color: #c71f1f;
    color: #fce9e9;
    font-weight: bold;
  }
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 4px;
  padding: 4px;
  font-size: 1rem;
  text-align: center;
  border: 2px solid #d3c5c5;
  border-radius: 50%;
  background-color: #d3c5c5;

  &:hover {
    box-sizing: content-box;
    border: 2px solid #c71f1f;
  }
`;

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
      <Ul>
        {Array.from({ length: 45 }, (_, idx) => {
          return (
            <li key={idx + 1}>
              <Checkbox
                type="checkbox"
                id={`winningNumber${idx + 1}`}
                name={idx + 1}
                onChange={this.handlePickNumber}
                checked={currentNumbers.includes(idx + 1)}
              />
              <Label htmlFor={`winningNumber${idx + 1}`}>{idx + 1}</Label>
            </li>
          );
        })}
      </Ul>
    );
  }
}

export default NumberList;
