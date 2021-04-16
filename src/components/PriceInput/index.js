import React, { Component } from 'react';
import { Root, Form, Label, InputWrapper, Input, SubmitButton, InputErrorMessage } from './style';

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
      this.validatePriceUnit($priceInput.valueAsNumber);
      this.setState({ isValidPriceUnit: true });
    } catch (error) {
      this.setState({ isValidPriceUnit: false, errorMessage: error.message });
      return;
    }

    this.props.onPurchaseLottos($priceInput.valueAsNumber);
    $priceInput.value = '';
  }

  validatePriceUnit(price) {
    if (price % 1000 !== 0) throw Error('1,000원 단위로 입력해주세요🐱‍');
  }

  render() {
    const errorMessage = this.state.isValidPriceUnit ? null : (
      <InputErrorMessage>{this.state.errorMessage}</InputErrorMessage>
    );

    return (
      <Root>
        <Form onSubmit={this.handleSubmitPrice}>
          <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
          <InputWrapper>
            <Input
              type="number"
              min="1000"
              id="price"
              placeholder="구입 금액"
              disabled={this.props.isDisabled}
              required
            />
            <SubmitButton disabled={this.props.isDisabled}>확인</SubmitButton>
            {errorMessage}
          </InputWrapper>
        </Form>
      </Root>
    );
  }
}

export default PriceInput;
