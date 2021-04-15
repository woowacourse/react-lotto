import React, { Component } from 'react';
import styled from 'styled-components';
import LottoPurchaseForm from './components/LottoPurchaseForm';
import PurchaseResult from './components/lottoPurchaseResult/PurchaseResult';

const MainTitle = styled.h1`
  text-align: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
    };
  }

  setPrice = price => {
    this.setState({
      price,
    });
  };

  render() {
    return (
      <main style={{ maxWidth: '450px', margin: '0 auto' }}>
        <MainTitle>🎱 행운의 로또</MainTitle>
        <MainWrapper>
          <div style={{ width: '100%' }}>
            <LottoPurchaseForm setPrice={this.setPrice} />
            <PurchaseResult />
          </div>
        </MainWrapper>
      </main>
    );
  }
}

export default App;
