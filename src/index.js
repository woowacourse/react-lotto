import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ModalContextProvider from './contexts/ModalContextProvider';

import './reset.scss';

ReactDOM.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>,
  document.getElementById('root')
);
