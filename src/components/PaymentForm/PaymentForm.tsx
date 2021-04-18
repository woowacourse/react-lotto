import React, { Component, ChangeEvent, FormEvent } from 'react';
import { PaymentFormWrapper, PaymentFormLabel } from './PaymentForm.styles';
import Button from '../common/Button';
import Input from '../common/Input';
import Wrapper from '../common/Wrapper';
import { alertByPaymentCase, isValidPayment } from '../../services/validation';
import TICKET from '../../constants/ticket';

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

    if (isValidPayment(this.state.payment)) {
      alertByPaymentCase(this.state.payment);
      return;
    }

    this.setState({
      payment: this.state.payment % TICKET.PRICE,
    });
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
            value={this.state.payment === 0 ? '' : this.state.payment}
            placeholder="구입 금액"
            required
          />
          <Button>확인</Button>
        </Wrapper>
      </PaymentFormWrapper>
    );
  }
}
