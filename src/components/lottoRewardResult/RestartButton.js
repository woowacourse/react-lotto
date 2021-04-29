import React, { Component } from 'react';

import Button from '../utils/Button';
import Flex from '../utils/Flex';

class RestartButton extends Component {
  render() {
    const { handleRestart } = this.props;

    return (
      <Flex marginTop={'0.4rem'}>
        <Button type="reset" onClick={handleRestart}>
          다시 시작하기
        </Button>
      </Flex>
    );
  }
}

export default RestartButton;
