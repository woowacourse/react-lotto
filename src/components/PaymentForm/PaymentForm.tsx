import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import { PaymentFormWrapper, PaymentFormLabel } from './PaymentForm.styles';
import { alertByPaymentCase, isValidPayment } from '../../services/validation';

interface Props {
  handlePayment: (newPayment: number) => void;
}

const PaymentForm = ({ handlePayment }: Props) => {
  const [payment, setPayment] = useState<number>(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.valueAsNumber);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidPayment(payment)) {
      alertByPaymentCase(payment);
      return;
    }

    setPayment(0);
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
          name="payment-input"
          required
        />
        <Button>확인</Button>
      </Wrapper>
    </PaymentFormWrapper>
  );
};

export default PaymentForm;
