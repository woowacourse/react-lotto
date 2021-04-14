import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
`;

const MessageBox = styled.p`
  color: red;
  text-align: center;
`;

const isValidPurchaseInput = (input) => Number(input) % 1000 === 0;

// TODO: 1000 매직 넘버 상수 처리
export default class PurchaseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidInput: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const payment = Number(event.target.elements["purchase-input"].value);

    this.setState(
      {
        ...this.state,
        isValidInput: isValidPurchaseInput(payment),
      },
      () =>
        this.state.isValidInput
          ? this.props.setLottoCount(payment / 1000)
          : this.props.setLottoCount(0)
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <label htmlFor="purchase-input">구입할 금액을 입력해주세요.</label>
        <div style={{ display: "flex", marginTop: "0.5rem" }}>
          <Input
            id="purchase-input"
            name="purchase-input"
            type="number"
            placeholder="구입 금액"
            min="1000"
            required
          />
          <Button type="submit">확인</Button>
        </div>
        {!this.state.isValidInput && (
          <MessageBox>1000원 단위로 입력해주세요.</MessageBox>
        )}
      </Form>
    );
  }
}

PurchaseInput.propTypes = {
  setLottoCount: PropTypes.func.isRequired,
};
