import React, { Component } from 'react';
import EnterWinning from './pages/EnterWinning/EnterWinning';
import Main from './pages/Main/Main';
import Result from './pages/Result/Result';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PATH } from './constants';
import Styled from './App.style';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Styled.Container>
        <h1>행운의 로또</h1>
        <Router>
          <Route exact path={PATH.MAIN} component={Main} />
          <Route exact path={PATH.ENTER_WINNING} component={EnterWinning} />
          <Route exact path={PATH.RESULT} component={Result} />
        </Router>
      </Styled.Container>
    );
  }
}

export default App;
