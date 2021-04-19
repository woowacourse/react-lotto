import React, { Component } from 'react';

import Button from '../utils/Button';

import { MESSAGE } from '../../constants/messages';

import { RestartButtonWrapperDiv } from './RestartButton.style';

class RestartButton extends Component {
  handleRestart = () => {
    if (window.confirm(MESSAGE.CONFIRM_RESTART)) {
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
