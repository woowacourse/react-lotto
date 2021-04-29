import React, { Component } from 'react';

import Button from '../utils/Button';

import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';
import { CSS_ATTRIBUTE } from '../../constants/cssAttribute';

import {
  PurchaseInputForm,
  PurchaseFormFlexDiv,
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
        <PurchaseFormFlexDiv>
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
          <Button minWidth={CSS_ATTRIBUTE.INPUT_PRICE_BUTTON_WIDTH}>
            확인
          </Button>
        </PurchaseFormFlexDiv>
      </PurchaseInputForm>
    );
  }
}

export default LottoPurchaseForm;
