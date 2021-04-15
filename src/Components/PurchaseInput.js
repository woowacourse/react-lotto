import React, { Component, createRef } from "react";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";
import ErrorMessageBox from "./common/ErrorMessageBox";
import { isDivisible } from "../Utils";
import { LOTTO_PRICE } from "../Constants/prizeTable";

const Form = styled.form`
  width: 100%;
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
    };

    this.formRef = createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const payment = Number(event.target.elements["purchase-input"].value);

    this.setState(
      {
        isValidInput: isDivisible(payment, LOTTO_PRICE),
      },
      () => {
        if (this.state.isValidInput) {
          this.context.action.createLottos(payment / LOTTO_PRICE);
          this.formRef.current.reset();
        } else {
          this.context.action.createLottos(0);
        }
      }
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} ref={this.formRef}>
        <label htmlFor="purchase-input">구입할 금액을 입력해주세요.</label>
        <div style={{ display: "flex", marginTop: "0.5rem" }}>
          <Input
            id="purchase-input"
            name="purchase-input"
            type="number"
            placeholder="구입 금액"
            min={LOTTO_PRICE}
            required
          />
          <Button type="submit">확인</Button>
        </div>
        {!this.state.isValidInput && (
          <ErrorMessageBox text={`${LOTTO_PRICE}원 단위로 입력해주세요.`} />
        )}
      </Form>
    );
  }
}

PurchaseInput.contextType = LottoContext;
