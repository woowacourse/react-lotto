import React, { Component } from 'react';

import Button from '../utils/Button';
import Flex from '../utils/Flex';

import { MESSAGE } from '../../constants/messages';

class RestartButton extends Component {
  handleRestart = () => {
    if (window.confirm(MESSAGE.CONFIRM_RESTART)) {
      this.props.initState();
      this.props.purchaseForm.resetLottoPurchaseForm();
    }
  };

  render() {
    return (
      <Flex marginTop={'0.4rem'}>
        <Button type="reset" onClick={this.handleRestart}>
          다시 시작하기
        </Button>
      </Flex>
    );
  }
}

export default RestartButton;
