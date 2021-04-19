import React from 'react';
import NumberInput from '../util-component/number-input';
import Button from '../util-component/button';
import { LOTTERY_PRICE } from '../../constants/number';
import './style.scss';
class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  onMoneyInputSubmit(e) {
    e.preventDefault();
    const money = Number(e.target.amount.value);
    const ticketCount = Math.floor(money / LOTTERY_PRICE);
    this.props.onHandleSubmit(money, ticketCount);
  }

  resetMoneyForm() {
    this.formRef.current.reset();
  }

  render() {
    return (
      <form
        className='money-input-form'
        ref={this.formRef}
        onSubmit={(e) => this.onMoneyInputSubmit(e)}
      >
        {<span className='money-unit'></span>}
        <NumberInput
          customClass='money-input'
          name='amount'
          min='1000'
          max='1000000'
          placeholder='1,000'
          isCurrentInput={true}
        />
        <Button buttonText='구입' customClass='money-input-button'></Button>
      </form>
    );
  }
}

export default MoneyInput;
