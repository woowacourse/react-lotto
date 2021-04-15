import React, { Component } from 'react';
import Main from './components/Main';
import Modal from './components/Modal';
import './css/index.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpened: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpened: true,
    });
  }

  closeModal() {
    this.setState({
      isModalOpened: false,
    });
  }

  render() {
    return (
      <div className="app d-flex justify-center items-center">
        <Main openModal={this.openModal} />
        {this.state.isModalOpened && <Modal />}
      </div>
    );
  }
}
