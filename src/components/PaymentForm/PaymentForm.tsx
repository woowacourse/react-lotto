import React, { Component, ChangeEvent, FormEvent } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import { PaymentFormWrapper, PaymentFormLabel } from './PaymentForm.styles';

type Props = {
  handlePayment: (newPayment: number) => void;
};

type State = {
  payment: number;
};
export default class PaymentForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      payment: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      payment: event.target.valueAsNumber,
    });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.handlePayment(this.state.payment);
  }

  render() {
    return (
      <PaymentFormWrapper onSubmit={this.handleSubmit}>
        <PaymentFormLabel>구입할 금액을 입력해주세요</PaymentFormLabel>
        <Wrapper display="flex">
          <Input
            fullWidth
            type="number"
            onChange={this.handleInputChange}
            placeholder="구입 금액"
            name="payment-input"
            required
          />
          <Button>확인</Button>
        </Wrapper>
      </PaymentFormWrapper>
    );
  }
}
