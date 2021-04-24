import { ChangeEvent, FormEvent, FC, useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import { PaymentFormWrapper, PaymentFormLabel } from './PaymentForm.styles';
import { isValidPayment } from '../../services/validation';
import ALERT_MESSAGE from '../../constants/alertMessage';

interface Props {
  handlePayment: (newPayment: number) => void;
}

const PaymentForm: FC<Props> = ({ handlePayment }) => {
  const [payment, setPayment] = useState(0);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPayment(target.valueAsNumber);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidPayment(payment)) {
      alert(ALERT_MESSAGE.SHOULD_MORE_THAN_MINIMUM_PAYMENT);
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
