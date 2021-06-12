import React, { Component } from 'react';

import Button from '../commons/Button/Button';
import Flex from '../commons/Flex/Flex';

class RestartButton extends Component {
  render() {
    const { handleRestart } = this.props;

    return (
      <Flex justifyContent="center" alignItems="center">
        <Button type="reset" onClick={handleRestart}>
          다시 시작하기
        </Button>
      </Flex>
    );
  }
}

export default RestartButton;
