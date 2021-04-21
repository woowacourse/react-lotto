import React, { Component } from 'react';

import LottoPurchaseForm from './LottoPurchaseForm/LottoPurchaseForm';
import PurchaseResult from './lottoPurchaseResult/PurchaseResult';
import WinningNumberForm from './lottoWinningNumber/WinningNumberForm';
import RewardModalInner from './lottoRewardResult/RewardModalInner';

import Modal from './utils/Modals';

import { Main, MainWrapperDiv, WidthFullDiv } from './App.style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lottos: [],
      winningNumbers: {
        numbers: [],
        bonusNumber: 0,
      },
      isModalOpened: false,
    };

    this.purchaseFormRef = React.createRef();
  }

  initState = () => {
    this.setLottos([]);
    this.setWinningNumbers([], 0);
    this.setIsModalOpened(false);
  };

  setLottos = lottos => {
    this.setState({
      lottos,
    });
  };

  setWinningNumbers = (numbers, bonusNumber) => {
    this.setState({
      winningNumbers: { numbers, bonusNumber },
    });
  };

  setIsModalOpened = bool => {
    this.setState({
      isModalOpened: bool,
    });
  };

  render() {
    const { lottos, isModalOpened } = this.state;
    const isPurchased = lottos.length > 0;

    return (
      <Main>
        <h1>🎱 행운의 로또</h1>
        <MainWrapperDiv>
          <WidthFullDiv>
            <LottoPurchaseForm
              setLottos={this.setLottos}
              ref={this.purchaseFormRef}
            />

            {isPurchased && (
              <>
                <PurchaseResult lottos={lottos} />
                <WinningNumberForm
                  setWinningNumbers={this.setWinningNumbers}
                  setIsModalOpened={this.setIsModalOpened}
                />
              </>
            )}
          </WidthFullDiv>
        </MainWrapperDiv>

        {isModalOpened && (
          <Modal setIsModalOpened={this.setIsModalOpened}>
            <RewardModalInner
              lottos={this.state.lottos}
              winningNumbers={this.state.winningNumbers}
              initState={this.initState}
              purchaseForm={this.purchaseFormRef.current}
            />
          </Modal>
        )}
      </Main>
    );
  }
}

export default App;
