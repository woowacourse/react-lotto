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

    this.props.createLottos(0);
  }

  handlePurchaseLotto = e => {
    e.preventDefault();

    const inputPrice = e.target.elements.price.value;
    this.props.createLottos(inputPrice);
  };

  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={this.handlePurchaseLotto}
        style={{ margin: '0.5rem' }}
      >
        <Label htmlFor="input-price">구입할 금액을 입력해주세요.</Label>
        <div style={{ display: 'flex' }}>
          <input
            ref={this.inputRef}
            type="number"
            id="input-price"
            name="price"
            placeholder="구입 금액"
            required
            min="1000"
            max="50000"
            step="1000"
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
