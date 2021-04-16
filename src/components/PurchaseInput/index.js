import React, { Component, createRef } from "react";
import { LOTTO_PRICE } from "../../@shared/constants/lotto";
import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../../@shared/constants/messages";
import { isDivisible } from "../../@shared/utils/common";
import ErrorMessageBox from "../common/ErrorMessageBox";

import { Button, Container, Form, Input } from "./style";

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
          this.context.action.updateLottos(payment / LOTTO_PRICE);
          this.formRef.current.reset();
        } else {
          this.context.action.updateLottos(0);
        }
      }
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} ref={this.formRef}>
        <label htmlFor="purchase-input">{GUIDE_MESSAGE.PURCHASE_INPUT}</label>
        <Container>
          <Input
            id="purchase-input"
            name="purchase-input"
            type="number"
            placeholder="구입 금액"
            min={LOTTO_PRICE}
            required
          />
          <Button type="submit">확인</Button>
        </Container>
        {!this.state.isValidInput && (
          <ErrorMessageBox text={ERROR_MESSAGE.INVALID_PRICE_UNIT} />
        )}
      </Form>
    );
  }
}
