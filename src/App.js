import React from 'react';
import MoneyInput from './components/money-input/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <MoneyInput></MoneyInput>
      </React.Fragment>
    );
  }
}

export default App;
