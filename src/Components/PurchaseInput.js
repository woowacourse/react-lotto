import React, { Component } from "react";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";
import ErrorMessageBox from "./common/ErrorMessageBox";
import { isDivisible } from "../utils";
import { LOTTO_PRICE, ERROR_MESSAGE, GUIDE_MESSAGE } from "../Constants";

const Form = styled.form`
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
  width: 80px;
  margin-left: 5px;
  padding: 10px 0;
  background-color: #00bcd4;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #018c9e;
  }
`;

export default class PurchaseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidInput: true,
      price: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState(
      {
        isValidInput: isDivisible(this.state.price, LOTTO_PRICE),
      },
      () => {
        if (this.state.isValidInput) {
          this.context.action.createLottos(this.state.price / LOTTO_PRICE);
          this.setState({ price: 0 });
        } else {
          this.context.action.createLottos(0);
        }
      }
    );
  }

  onChangePrice(event) {
    this.setState({ price: Number(event.target.value) });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} ref={this.formRef}>
        <label htmlFor="purchase-input">{GUIDE_MESSAGE.PURCHASE_INPUT}</label>
        <FlexContainer>
          <Input
            id="purchase-input"
            name="purchase-input"
            type="number"
            placeholder="구입 금액"
            value={this.state.price || ""}
            onChange={this.onChangePrice}
            min={LOTTO_PRICE}
            required
          />
          <Button type="submit">확인</Button>
        </FlexContainer>
        {!this.state.isValidInput && (
          <ErrorMessageBox text={ERROR_MESSAGE.INVALID_PRICE_UNIT} />
        )}
      </Form>
    );
  }
}

PurchaseInput.contextType = LottoContext;
