import React, { Component } from 'react';

import RewardResultTable from './RewardResultTable';
import RestartButton from './RestartButton';

class RewardModalInner extends Component {
  render() {
    return (
      <>
        <RewardResultTable
          lottos={this.props.lottos}
          winningNumbers={this.props.winningNumbers}
        />
        <RestartButton
          initState={this.props.initState}
          purchaseForm={this.props.purchaseForm}
        />
      </>
    );
  }
}

export default RewardModalInner;
