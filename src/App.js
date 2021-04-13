import React, { Component } from 'react';
import Main from './components/Main';
import Modal from './components/Modal';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Main />
        <Modal />
      </div>
    );
  }
}
