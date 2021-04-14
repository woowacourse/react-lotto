import React, { Component } from 'react';
import { Root, Container, Title } from './style';
import PriceInput from './components/PriceInput';

class App extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Title>🎰 개미 로또</Title>
          <PriceInput></PriceInput>
        </Container>
      </Root>
    );
  }
}

export default App;
