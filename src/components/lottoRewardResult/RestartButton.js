import React, { Component } from 'react';

import Button from '../utils/Button';

import { RestartButtonWrapperDiv } from './RestartButton.style';

class RestartButton extends Component {
  handleRestart = () => {
    if (window.confirm('다시 시작하시겠습니까?')) {
      this.props.initState();
      this.props.purchaseForm.resetLottoPurchaseForm();
    }
  };

  render() {
    return (
      <RestartButtonWrapperDiv>
        <Button buttonType="reset" clickHandler={this.handleRestart}>
          다시 시작하기
        </Button>
      </RestartButtonWrapperDiv>
    );
  }
}

export default RestartButton;
