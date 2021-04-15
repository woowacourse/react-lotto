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

    this.state = { price: 0, lottos: [], winningNumbers: {} };
    this.handleSubmitPrice = this.handleSubmitPrice.bind(this);
    this.handleSubmitWinningNumbers = this.handleSubmitWinningNumbers.bind(this);
  }

  handleSubmitPrice(event) {
    const price = event.target.price.valueAsNumber;

    this.setState({ price }, this.createLottos);
  }

  handleSubmitWinningNumbers(winningNumbers) {
    this.setState({
      winningNumbers,
    });
  }

  createLottos() {
    const count = this.state.price / Lotto.PRICE_UNIT;
    const lottos = Array.from({ length: count }, () => new Lotto(Lotto.generateLottoNumbers()));

    this.setState({ lottos });
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
          />
        </Container>
        <ResultModal />
      </Root>
    );
  }
}

export default App;
