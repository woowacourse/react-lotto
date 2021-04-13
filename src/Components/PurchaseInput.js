import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
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

export default class PurchaseInput extends Component {
  render() {
    return (
      <Form>
        <label htmlFor="purchase-input">구입할 금액을 입력해주세요.</label>
        <div style={{ display: "flex" }}>
          <Input id="purchase-input" placeholder="구입 금액" />
          <Button type="submit">확인</Button>
        </div>
      </Form>
    );
  }
}
