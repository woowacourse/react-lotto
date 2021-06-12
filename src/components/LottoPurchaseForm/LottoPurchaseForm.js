import React, { Component } from 'react';

import Button from '../commons/Button/Button';
import Flex from '../commons/Flex/Flex';

import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

import {
  PurchaseInputForm,
  PurchaseInput,
} from './styles/LottoPurchaseForm.style';

class LottoPurchaseForm extends Component {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.resetLottoPurchaseForm();
  }

  resetLottoPurchaseForm() {
    this.formRef.current.reset();
    this.inputRef.current.focus();
  }

  handlePurchaseLottoInput = e => {
    e.preventDefault();

    this.props.handlePurchaseLotto(e.target.elements.price.value);
  };

  render() {
    return (
      <PurchaseInputForm
        ref={this.formRef}
        onSubmit={this.handlePurchaseLottoInput}
      >
        <label htmlFor="input-price">구입할 금액을 입력해주세요.</label>
        <Flex>
          <PurchaseInput
            ref={this.inputRef}
            type="number"
            id="input-price"
            name="price"
            placeholder={MESSAGE.INPUT_PLACEHOLDER}
            required
            min={LOTTO.MIN_PRICE}
            max={LOTTO.MAX_PRICE}
            step={LOTTO.UNIT}
          />
          <Button minWidth="64px">확인</Button>
        </Flex>
      </PurchaseInputForm>
    );
  }
}

export default LottoPurchaseForm;
