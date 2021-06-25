import React from 'react';
import PropTypes from 'prop-types';
import Button from '../@util-components/Button';
import NumberInput from '../@util-components/NumberInput';
import { LOTTERY_PRICE } from '../../constants/number';
import './style.scss';

const MoneyInput = ({ handleMoneySubmit, makeReceipt }) => {
  const onMoneyInputSubmit = (e) => {
    e.preventDefault();

    const money = Number(e.target.amount.value);
    const ticketCount = Math.floor(money / LOTTERY_PRICE);

    handleMoneySubmit(money);
    makeReceipt(ticketCount);
  };

  return (
    <form className='money-input-form' onSubmit={onMoneyInputSubmit}>
      <span className='money-unit' />
      <NumberInput
        customClass='money-input'
        name='amount'
        min='1000'
        max='1000000'
        placeholder='1,000'
        isCurrent={true}
      />
      <Button buttonText='구입' customClass='money-input-button' />
    </form>
  );
};

MoneyInput.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export default MoneyInput;
