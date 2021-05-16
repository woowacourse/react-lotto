import PropTypes from 'prop-types';
import React from 'react';
import { LOTTERY_PRICE } from '../../constants/number';
import Button from '../UtilComponent/Button';
import NumberInput from '../UtilComponent/NumberInput';
import './style.scss';
class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onMoneyInputSubmit(e) {
    e.preventDefault();
    const money = Number(this.inputRef.current.value);
    const ticketCount = Math.floor(money / LOTTERY_PRICE);
    this.props.onHandleSubmit(money, ticketCount);
  }

  resetMoneyForm() {
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <form className='money-input-form' onSubmit={(e) => this.onMoneyInputSubmit(e)}>
        <NumberInput
          ref={this.inputRef}
          customClass='money-input'
          name='amount'
          min='1000'
          max='1000000'
          placeholder='1,000'
        />
        <Button customClass='money-input-button'>구입</Button>
      </form>
    );
  }
}

MoneyInput.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export default MoneyInput;
