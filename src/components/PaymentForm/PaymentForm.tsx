import React, { Component } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { PaymentFormWrapper, PaymentFormLabel, PaymentWrapper } from './PaymentForm.styles';

export default class PaymentForm extends Component {
  render() {
    return (
      <PaymentFormWrapper>
        <PaymentFormLabel>구입할 금액을 입력해주세요</PaymentFormLabel>
        <PaymentWrapper>
          <Input fullWidth type="number" placeholder="구입 금액" name="payment-input" required />
          <Button>확인</Button>
        </PaymentWrapper>
      </PaymentFormWrapper>
    );
  }
}
