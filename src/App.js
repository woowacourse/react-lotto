import React from 'react';
import MoneyInput from './components/money-input/index';
import PurchaseNumberList from './components/purchase-number-list';
import WinningNumber from './components/winning-number';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoneyInputValid: false,
      isModalOpen: false,
    };
  }

  handleSubmit() {
    this.setState({
      isMoneyInputValid: true,
    });
  }

  render() {
    return (
      <>
        <MoneyInput handleSubmit={() => this.handleSubmit()}></MoneyInput>
        {this.state.isMoneyInputValid && (
          <>
            <PurchaseNumberList></PurchaseNumberList>
            <WinningNumber></WinningNumber>
          </>
        )}
      </>
    );
  }
}

export default App;
