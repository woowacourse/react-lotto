import React, { Component } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import {
  PriceInputFormWrapper,
  PriceInputFormLabel,
  PriceInputWrapper,
} from './PriceInputForm.styles';

export default class PriceInputForm extends Component {
  render() {
    return (
      <PriceInputFormWrapper>
        <PriceInputFormLabel>구입할 금액을 입력해주세요</PriceInputFormLabel>
        <PriceInputWrapper>
          <Input type="number" placeholder="구입 금액" name="payment-input" required />
          <Button>확인</Button>
        </PriceInputWrapper>
      </PriceInputFormWrapper>
    );
  }
}
