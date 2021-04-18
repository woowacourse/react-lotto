import React, { Component } from 'react';
import styled from 'styled-components';

const NumberInputText = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
  font-weight: bold;
`;

const FlexCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberInput = styled.input`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  text-align: center;
  width: 40px;
  height: 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #c71f1f;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
class BonusNumberInput extends Component {
  render() {
    return (
      <div>
        <NumberInputText>보너스 번호</NumberInputText>
        <FlexCenterDiv>
          <NumberInput
            type="number"
            name="bonus-number"
            aria-label="winning number bonus"
            required
            min="1"
            max="45"
            maxLength="2"
          />
        </FlexCenterDiv>
      </div>
    );
  }
}

export default BonusNumberInput;
