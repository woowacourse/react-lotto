import React, { Component } from 'react';

import LottoPurchaseForm from './LottoPurchaseForm/LottoPurchaseForm';
import PurchaseResult from './lottoPurchaseResult/PurchaseResult';
import WinningNumberForm from './lottoWinningNumber/WinningNumberForm';
import RewardModalInner from './lottoRewardResult/RewardModalInner';

import Modal from './utils/Modals';
import Flex from './utils/Flex';

import { createLottos } from '../services/lottoPurchase';

import { MESSAGE } from '../constants/messages';

import { MainSection, WidthFullDiv } from './App.style';

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

  setWinningNumbers = winningNumbers => {
    this.setState({
      winningNumbers,
    });
  };

  setIsModalOpened = bool => {
    this.setState({
      isModalOpened: bool,
    });
  };

  handlePurchaseLotto = inputPrice => {
    this.setLottos(createLottos(inputPrice));
  };

  handleWinningNumber = (numbers, bonusNumber) => {
    this.setWinningNumbers({ numbers, bonusNumber });
    this.setIsModalOpened(true);
  };

  handleModalClosed = () => {
    this.setIsModalOpened(false);
  };

  handleRestart = () => {
    if (window.confirm(MESSAGE.CONFIRM_RESTART)) {
      this.initState();
      this.purchaseFormRef.current.resetLottoPurchaseForm();
    }
  };

  render() {
    const { lottos, winningNumbers, isModalOpened } = this.state;
    const isPurchased = lottos.length > 0;

    return (
      <MainSection>
        <h1>🎱 행운의 로또</h1>
        <Flex flexDirection="column" alignItems="center">
          <WidthFullDiv>
            <LottoPurchaseForm
              handlePurchaseLotto={this.handlePurchaseLotto}
              ref={this.purchaseFormRef}
            />

            {isPurchased && (
              <>
                <PurchaseResult lottos={lottos} />
                <WinningNumberForm
                  handleWinningNumber={this.handleWinningNumber}
                />
              </>
            )}
          </WidthFullDiv>
        </Flex>

        {isModalOpened && (
          <Modal
            handleModalClosed={this.handleModalClosed}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            transition="opacity 0.25s ease"
            innerMaxWidth="350px"
            innerBackgroundColor="#fff"
            innerMargin="auto"
            innerPadding="2.5rem"
            innerTransition="top 0.25s ease"
            closeButtonWidth="20px"
            closeButtonHeight="20px"
            closeButtonRightPosition="30px"
            closeButtonTopPosition="30px"
            closeButtonPathStroke="gray"
            closeButtonPathStrokeWidth="5"
          >
            <RewardModalInner
              lottos={lottos}
              winningNumbers={winningNumbers}
              handleRestart={this.handleRestart}
            />
          </Modal>
        )}
      </MainSection>
    );
  }
}

export default App;
