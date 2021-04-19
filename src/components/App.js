import React, { Component } from 'react';

import LottoPurchaseForm from './LottoPurchaseForm/LottoPurchaseForm';
import PurchaseResult from './lottoPurchaseResult/PurchaseResult';
import WinningNumberForm from './lottoWinningNumber/WinningNumberForm';
import RewardModalInner from './lottoRewardResult/RewardModalInner';

import Modal from './utils/Modals';
import { getRandomNumber } from '../utils';

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

  createLottos = price => {
    const lottoCount = Math.floor(price / 1000);

    const newLottos = Array.from({ length: lottoCount }, () => {
      const lotto = new Set();
      while (lotto.size < 6) {
        lotto.add(getRandomNumber(1, 45));
      }
      return [...lotto].sort((a, b) => a - b);
    });

    this.setLottos(newLottos);
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
              createLottos={this.createLottos}
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
