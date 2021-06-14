import React, { useEffect } from 'react';

import Button from '../common/Button';
import NumberInput from '../common/NumberInput';

import { LOTTERY_PRICE } from '../../constants/number';

import './style.scss';

const MoneyInput = React.forwardRef(({ onHandleSubmit }, ref) => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  const onMoneyInputSubmit = (e) => {
    e.preventDefault();
    const money = Number(ref.current.value);
    const ticketCount = Math.floor(money / LOTTERY_PRICE);
    onHandleSubmit(money, ticketCount);
  };

  return (
    <form className='money-input-form' onSubmit={onMoneyInputSubmit}>
      <NumberInput
        ref={ref}
        customClass='money-input'
        name='amount'
        min='1000'
        max='1000000'
        placeholder='1,000'
      />
      <Button customClass='money-input-button'>구입</Button>
    </form>
  );
});

export default MoneyInput;
