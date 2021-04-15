import React, { Component } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #00bcd4;
  border-color: #00bcd4;
`;

class LottoPurchaseForm extends Component {
  handlePayMoney = e => {
    e.preventDefault();
    this.props.setPrice(e.target.elements.price.value);
  };

  render() {
    return (
      <form onSubmit={this.handlePayMoney} style={{ margin: '0.5rem' }}>
        <Label for="input-price">구입할 금액을 입력해주세요.</Label>
        <div style={{ display: 'flex' }}>
          <input
            type="number"
            id="input-price"
            name="price"
            placeholder="구입 금액"
            required
            min="1000"
            max="50000"
            style={{
              width: '100%',
              marginRight: '0.2rem',
              paddingLeft: '0.5rem',
            }}
          />
          <Button>확인</Button>
        </div>
      </form>
    );
  }
}

export default LottoPurchaseForm;
