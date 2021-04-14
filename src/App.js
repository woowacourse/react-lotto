import React, { Component } from 'react';
import EnterWinning from './pages/EnterWinning';
import Main from './pages/Main/Main';
import Result from './pages/Result';
import { CURRENT_PAGE } from './constants';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'Main',
    };
  }

  render() {
    return (
      <>
        <h1>행운의 로또</h1>
        {this.state.currentPage === CURRENT_PAGE.MAIN && <Main />}
        {this.state.currentPage === CURRENT_PAGE.ENTER_WINNING && <EnterWinning />}
        {this.state.currentPage === CURRENT_PAGE.RESULT && <Result />}
      </>
    );
  }
}

export default App;
