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

    this.state = {
      price: 0,
      lottos: [],
      winningNumbers: {
        mainNumbers: [],
        bonusNumber: null,
      },
      isResultModalOpen: false,
    };

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

  openResultModal(winningNumbers) {
    this.setState({
      winningNumbers,
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
          <PriceInput onPurchaseLottos={this.purchaseLottos} />
          <LottosContainer lottos={this.state.lottos} />
          <WinningNumbersContainer winningNumbers={this.state.winningNumbers} onShowResult={this.openResultModal} />
        </Container>
        <ResultModal
          isOpen={this.state.isResultModalOpen}
          closeModal={this.closeResultModal}
          price={this.state.price}
          lottos={this.state.lottos}
          winningNumbers={this.state.winningNumbers}
        />
      </Root>
    );
  }
}

export default App;
