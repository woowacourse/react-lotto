import React, { Component } from 'react';
import { Root, Form, Label, InputWrapper, Input, SubmitButton, InputErrorMessage } from './style';

class PriceInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceInputValue: '',
      errorMessage: '',
    };
    this.handleSubmitPrice = this.handleSubmitPrice.bind(this);
    this.handleChangePriceInputValue = this.handleChangePriceInputValue.bind(this);
  }

  handleSubmitPrice(event) {
    event.preventDefault();

    try {
      this.validatePriceUnit(Number(this.state.priceInputValue));
      this.setState({ errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      return;
    }

    this.props.onSetPrice(Number(this.state.priceInputValue));
    this.setState({ priceInputValue: '' });
  }

  handleChangePriceInputValue(event) {
    this.setState({ priceInputValue: event.target.value });
  }

  validatePriceUnit(price) {
    if (price % 1000 !== 0) throw Error('1,000원 단위로 입력해주세요 🐱‍');
  }

  render() {
    return (
      <Root>
        <Form onSubmit={this.handleSubmitPrice}>
          <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
          <InputWrapper>
            <Input
              type="number"
              id="price"
              value={this.state.priceInputValue}
              onChange={this.handleChangePriceInputValue}
              min="1000"
              placeholder="구입 금액"
              disabled={this.props.isDisabled}
              required
            />
            <SubmitButton disabled={this.props.isDisabled}>확인</SubmitButton>
            {this.state.errorMessage && <InputErrorMessage>{this.state.errorMessage}</InputErrorMessage>}
          </InputWrapper>
        </Form>
      </Root>
    );
  }
}

export default PriceInput;
