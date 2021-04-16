import React, { Component } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';
import Lotto from './lotto';

const initialState = {
  price: 0,
  lottos: [],
  winningNumbers: {
    mainNumbers: [],
    bonusNumber: null,
  },
  isSwitchOn: false,
  isResultModalOpen: false,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.purchaseLottos = this.purchaseLottos.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.openResultModal = this.openResultModal.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.closeResultModal = this.closeResultModal.bind(this);

    this.priceInput = React.createRef();
    this.winningNumbersContainer = React.createRef();
  }

  purchaseLottos(price) {
    this.setState({ price }, this.createLottos);
  }

  createLottos() {
    const count = this.state.price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    this.setState({ lottos });
  }

  toggleDisplay() {
    this.setState({ isSwitchOn: !this.state.isSwitchOn });
  }

  openResultModal(winningNumbers) {
    this.setState({
      winningNumbers,
      isResultModalOpen: true,
    });
  }

  resetGame() {
    this.setState(initialState);
    this.priceInput.current.resetForm();
    this.winningNumbersContainer.current.resetForm();
  }

  closeResultModal() {
    this.setState({
      isResultModalOpen: false,
    });
  }

  render() {
    return (
      <Root>
        <Container>
          <Title>🎰 개미 로또</Title>
          <PriceInput onPurchaseLottos={this.purchaseLottos} ref={this.priceInput} />
          <LottosContainer
            lottos={this.state.lottos}
            onToggleDisplay={this.toggleDisplay}
            isSwitchOn={this.state.isSwitchOn}
          />
          <WinningNumbersContainer
            winningNumbers={this.state.winningNumbers}
            onShowResult={this.openResultModal}
            ref={this.winningNumbersContainer}
          />
        </Container>
        <ResultModal
          isOpen={this.state.isResultModalOpen}
          onResetGame={this.resetGame}
          onCloseModal={this.closeResultModal}
          price={this.state.price}
          lottos={this.state.lottos}
          winningNumbers={this.state.winningNumbers}
        />
      </Root>
    );
  }
}

export default App;
