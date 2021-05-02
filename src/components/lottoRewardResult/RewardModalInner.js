import React, { Component } from 'react';

import RewardResultTable from './RewardResultTable';
import RestartButton from './RestartButton';

class RewardModalInner extends Component {
  render() {
    const { lottos, winningNumbers, handleRestart } = this.props;

    return (
      <>
        <RewardResultTable lottos={lottos} winningNumbers={winningNumbers} />
        <RestartButton handleRestart={handleRestart} />
      </>
    );
  }
}

export default RewardModalInner;
