import React, { Component } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';
import LottosContainer from './components/LottosContainer';
import WinningNumbersContainer from './components/WinningNumbersContainer';
import ResultModal from './components/ResultModal';

class App extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Title>🎰 개미 로또</Title>
          <PriceInput />
          <LottosContainer />
          <WinningNumbersContainer />
        </Container>
        <ResultModal />
      </Root>
    );
  }
}

export default App;
