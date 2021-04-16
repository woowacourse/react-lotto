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
class BonusNumberInput extends Component {
  render() {
    return (
      <div>
        <NumberInputText>보너스 번호</NumberInputText>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <NumberInput
            type="number"
            name="bonus-number"
            aria-label="winning number bonus"
            required
            min="1"
            max="45"
            maxLength="2"
            onChange={this.handleTypeLottoNumber}
          />
        </div>
      </div>
    );
  }
}

export default BonusNumberInput;
