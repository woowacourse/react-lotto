import React, { Component } from 'react';
import Main from './components/Main';
import Modal from './components/Modal';
import './css/index.css';

export default class App extends Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => {
    this.setState({
      isModalOpened: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpened: false,
    });
  };

  render() {
    return (
      <div className="app d-flex justify-center items-center">
        <Main openModal={this.openModal} />
        {this.state.isModalOpened && <Modal closeModal={this.closeModal} />}
      </div>
    );
  }
}
