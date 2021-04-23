import { ChangeEvent, FormEvent } from 'react';
import { PaymentFormWrapper, PaymentFormLabel } from './PaymentForm.styles';
import Button from '../common/Button';
import Input from '../common/Input';
import Wrapper from '../common/Wrapper';
import { alertByPaymentCase, isValidPayment } from '../../services/validation';
import TICKET from '../../constants/ticket';
import { useState } from 'react';

type Props = {
  handlePayment: (newPayment: number) => void;
};

type State = {
  payment: number;
};

const PaymentForm = ({ handlePayment }: Props) => {
  const [payment, setPayment] = useState(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.valueAsNumber);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidPayment(payment)) {
      alertByPaymentCase(payment);
      return;
    }

    setPayment(payment % TICKET.PRICE);

    handlePayment(payment);
  };

  return (
    <PaymentFormWrapper onSubmit={handleSubmit}>
      <PaymentFormLabel>구입할 금액을 입력해주세요</PaymentFormLabel>
      <Wrapper display="flex">
        <Input
          fullWidth
          type="number"
          onChange={handleInputChange}
          value={payment === 0 ? '' : payment}
          placeholder="구입 금액"
          required
        />
        <Button>확인</Button>
      </Wrapper>
    </PaymentFormWrapper>
  );
};

export default PaymentForm;
