import React, { Component } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';
import AnnounceTimer from './components/AnnounceTimer';
import Lotto from './Lotto';

const initialState = {
  price: 0,
  lottos: [],
  winningNumbers: {
    mainNumbers: [],
    bonusNumber: null,
  },
  isPurchaseDone: false,
  isSwitchOn: false,
  isResultModalOpen: false,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleUpdatePrice = this.handleUpdatePrice.bind(this);
    this.purchaseLottos = this.purchaseLottos.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.setWinningNumbers = this.setWinningNumbers.bind(this);
    this.closeResultModal = this.closeResultModal.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleUpdatePrice(event) {
    const price = event.target.value;
    this.setState({ price });
  }

  purchaseLottos(price) {
    this.setState({ price, isPurchaseDone: true }, this.createLottos);
  }

  createLottos() {
    const count = this.state.price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    this.setState({ lottos });
  }

  toggleDisplay() {
    this.setState({ isSwitchOn: !this.state.isSwitchOn });
  }

  setWinningNumbers(winningNumbers) {
    this.setState({
      winningNumbers,
    });

    this.openResultModal();
  }

  openResultModal() {
    this.setState({
      isResultModalOpen: true,
    });
  }

  closeResultModal() {
    this.setState({
      isResultModalOpen: false,
    });
  }

  resetGame() {
    this.setState(initialState);
  }

  render() {
    return (
      <Root>
        <Container>
          <Title>🎰 개미 로또</Title>
          {this.state.isPurchaseDone ? <AnnounceTimer /> : null}
          <PriceInput
            isDisabled={this.state.isPurchaseDone}
            onPurchaseLottos={this.purchaseLottos}
            onUpdatePrice={this.handleUpdatePrice}
          />
          {this.state.isPurchaseDone ? (
            <>
              <LottosContainer
                lottos={this.state.lottos}
                isSwitchOn={this.state.isSwitchOn}
                onToggleDisplay={this.toggleDisplay}
              />
              <WinningNumbersContainer onSetwinnningNmbers={this.setWinningNumbers} />
            </>
          ) : null}
        </Container>
        <ResultModal
          isOpen={this.state.isResultModalOpen}
          price={this.state.price}
          lottos={this.state.lottos}
          winningNumbers={this.state.winningNumbers}
          onResetGame={this.resetGame}
          onCloseModal={this.closeResultModal}
        />
      </Root>
    );
  }
}

export default App;
