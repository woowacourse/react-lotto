import React, { Component } from 'react';
import styled from 'styled-components';

const NumberInputText = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
  font-weight: bold;
`;

const NumberInput = styled.input`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  text-align: center;
  width: 30px;
  height: 36px;
`;

class WinningNumberList extends Component {
  createNumberInput() {
    return Array.from({ length: 6 }, (_, idx) => (
      <NumberInput
        type="number"
        name={`winning-number-${idx + 1}`}
        aria-label={`winning number ${idx + 1}`}
        required
        min="1"
        max="45"
        maxLength="2"
        key={idx + 1}
      />
    ));
  }

  render() {
    return (
      <div>
        <NumberInputText>당첨 번호</NumberInputText>
        <div>{this.createNumberInput()}</div>
      </div>
    );
  }
}

export default WinningNumberList;
