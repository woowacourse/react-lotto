import React, { Component } from 'react';
import Main from './components/Main';
import Modal from './components/Modal';
import './css/index.css';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app d-flex justify-center items-center">
        <Main />
        <Modal />
      </div>
    );
  }
}
