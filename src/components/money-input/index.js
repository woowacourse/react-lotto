import React from 'react';
import NumberInput from '../../utils/number-input/index';
import Button from '../../utils/button/index';

class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <NumberInput
          customClass='money-input'
          min='1000'
          max='1000000'
          placeholder='구입 금액을 입력해주세요.'
          autoFocus
        />
        <Button buttonText='구입하기' customClass='money-input-button'></Button>
      </form>
    );
  }
}

export default MoneyInput;
