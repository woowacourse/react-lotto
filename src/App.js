import React from 'react';
import MoneyInput from './components/money-input/index';
import PurchaseNumberList from './components/purchase-number-list';
import WinningNumber from './components/winning-number';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <MoneyInput></MoneyInput>
        <PurchaseNumberList></PurchaseNumberList>
        <WinningNumber></WinningNumber>
      </React.Fragment>
    );
  }
}

export default App;
