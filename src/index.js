import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import LotteryNumbersContextProvider from './contexts/LotteryNumbersContextProvider';
import ModalContextProvider from './contexts/ModalContextProvider';
import TicketsContextProvider from './contexts/TicketsContextProvider';

import './reset.scss';

ReactDOM.render(
  <ModalContextProvider>
    <LotteryNumbersContextProvider>
      <TicketsContextProvider>
        <App />
      </TicketsContextProvider>
    </LotteryNumbersContextProvider>
  </ModalContextProvider>,
  document.getElementById('root')
);
