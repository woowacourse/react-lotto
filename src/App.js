import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Header>🎱 행운의 로또</Header>
      <Main />
    </>
  );
};

export default hot(App);
