import React, { Component } from 'react';
import Main from './components/Main';
import Modal from './components/Modal';
import './css/index.css';
import { LOTTO_VALUE } from './constants';

export default class App extends Component {
  state = {
    isModalOpened: false,
    winningCounts: {
      [LOTTO_VALUE.RANK.FIRST]: 0,
      [LOTTO_VALUE.RANK.SECOND]: 0,
      [LOTTO_VALUE.RANK.THIRD]: 0,
      [LOTTO_VALUE.RANK.FOURTH]: 0,
      [LOTTO_VALUE.RANK.FIFTH]: 0,
    },
    lottoCount: 0,
  };

  setWinningCounts = (rank) => {
    this.setState({
      winningCounts: {
        ...this.state.winningCounts,
        [rank]: this.state.winningCounts[rank] + 1,
      },
    });
  };

  setLottoCount = (count) => {
    this.setState({
      lottoCount: count,
    });
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
        <Main
          openModal={this.openModal}
          setWinningCounts={this.setWinningCounts}
          lottoCount={this.state.lottoCount}
          setLottoCount={this.setLottoCount}
        />
        {this.state.isModalOpened && (
          <Modal closeModal={this.closeModal} winningCounts={this.state.winningCounts} />
        )}
      </div>
    );
  }
}
