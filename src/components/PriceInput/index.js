import React, { Component } from 'react';
import { Root, Label, InputWrapper, Input, SubmitButton, InputErrorMessage } from './style';
import { validatePriceUnit } from '../../utils/validator';

class PriceInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidPriceUnit: true,
      errorMessage: '',
    };
    this.handleSubmitPrice = this.handleSubmitPrice.bind(this);
  }

  handleSubmitPrice(event) {
    event.preventDefault();

    const $priceInput = event.target.price;

    try {
      validatePriceUnit($priceInput.valueAsNumber);
      this.setState({ isValidPriceUnit: true, errorMessage: '' });
    } catch (error) {
      this.setState({ isValidPriceUnit: false, errorMessage: error.message });
      return;
    }

    this.props.onPurchaseLottos($priceInput.valueAsNumber);
    $priceInput.value = '';
  }

  render() {
    const errorMessage = this.state.isValidPriceUnit ? null : (
      <InputErrorMessage>{this.state.errorMessage}</InputErrorMessage>
    );

    return (
      <Root>
        <form onSubmit={this.handleSubmitPrice}>
          <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
          <InputWrapper>
            <Input
              type="number"
              id="price"
              min="1000"
              placeholder="구입 금액"
              disabled={this.props.isDisabled}
              required
            />
            <SubmitButton disabled={this.props.isDisabled}>확인</SubmitButton>
            {errorMessage}
          </InputWrapper>
        </form>
      </Root>
    );
  }
}

export default PriceInput;
