import React, { Component } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';
import Lotto from './lotto';

class App extends Component {
  constructor(props) {
    super(props);

    this.purchaseLottos = this.purchaseLottos.bind(this);
    this.openResultModal = this.openResultModal.bind(this);
    this.closeResultModal = this.closeResultModal.bind(this);
  }

  purchaseLottos(price) {
    this.setState({ price }, this.createLottos);
  }

  createLottos() {
    const count = this.state.price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    this.setState({ lottos });
  }

  handleSubmitWinningNumbers(winningNumbers) {
    this.setState({
      winningNumbers,
    });
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

  render() {
    return (
      <Root>
        <Container>
          <Title>🎰 개미 로또</Title>
          <PriceInput onSubmitPrice={this.handleSubmitPrice} />
          <LottosContainer lottos={this.state.lottos} />
          <WinningNumbersContainer
            winningNumbers={this.state.winningNumbers}
            onSubmitWinningNumbers={this.handleSubmitWinningNumbers}
            onOpenResultModal={this.openResultModal}
          />
        </Container>
        <ResultModal isOpen={this.state.isResultModalOpen} closeModal={this.closeResultModal} />
      </Root>
    );
  }
}

export default App;
