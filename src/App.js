import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import EnterWinning from './pages/EnterWinning/EnterWinning';
import Main from './pages/Main/Main';
import Result from './pages/Result/Result';
import { PATH } from './constants';
import Styled from './App.style';

const theme = {
  colors: {
    primary: '#2ac1bc',
  },
};

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Styled.Container>
          <Styled.Title>행운의 로또</Styled.Title>
          <Router>
            <Route exact path={PATH.MAIN} component={Main} />
            <Route exact path={PATH.ENTER_WINNING} component={EnterWinning} />
            <Route exact path={PATH.RESULT} component={Result} />
          </Router>
        </Styled.Container>
      </ThemeProvider>
    );
  }
}

export default App;
