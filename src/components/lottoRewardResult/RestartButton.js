import React, { Component } from 'react';
import styled from 'styled-components';

const RestartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;
`;

const Button = styled.button`
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #c71f1f;
  border-color: #c71f1f;
  color: #fce9e9;
`;

class RestartButton extends Component {
  handleRestart = () => {
    if (window.confirm('다시 시작하시겠습니까?')) {
      this.props.initState();
      this.props.purchaseForm.resetLottoPurchaseForm();
    }
  };

  render() {
    return (
      <RestartButtonWrapper>
        <Button type="reset" onClick={this.handleRestart}>
          다시 시작하기
        </Button>
      </RestartButtonWrapper>
    );
  }
}

export default RestartButton;
