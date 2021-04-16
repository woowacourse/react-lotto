import './index.css';
import './css/index.css';
import React, { Component } from 'react';
import Main from './components/Main';
import Modal from './components/Modal';
import { LOTTO_VALUE, LOTTO_PRICE } from './constants';
import { getAnnouncementDate } from './utils/lottoUtils';

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
    mainComponentKey: new Date(),
    announcementDate: getAnnouncementDate(),
  };

  initialState = this.state;

  resetState = () => {
    this.setState({ ...this.initialState, mainComponentKey: new Date() });
  };

  setWinningCounts = (winningCounts) => {
    this.setState({ winningCounts: winningCounts });
  };

  increaseWinningCounts = (rank) => {
    this.setState((prevState) => ({
      winningCounts: {
        ...prevState.winningCounts,
        [rank]: prevState.winningCounts[rank] + 1,
      },
    }));
  };

  setLottoCount = (count) => {
    this.setState({
      lottoCount: count,
    });
  };

  setAnnouncementDate = (announcementDate) => {
    this.setState({ announcementDate: announcementDate });
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

    this.setWinningCounts(this.initialState.winningCounts);
  };

  render() {
    return (
      <div className="app d-flex justify-center items-center">
        <Main
          announcementDate={this.state.announcementDate}
          setAnnouncementDate={this.setAnnouncementDate}
          isModalOpened={this.state.isModalOpened}
          openModal={this.openModal}
          increaseWinningCounts={this.increaseWinningCounts}
          setWinningCounts={this.setWinningCounts}
          lottoCount={this.state.lottoCount}
          setLottoCount={this.setLottoCount}
          key={this.state.mainComponentKey}
        />
        {this.state.isModalOpened && (
          <Modal
            closeModal={this.closeModal}
            winningCounts={this.state.winningCounts}
            paidMoney={this.state.lottoCount * LOTTO_PRICE}
            resetAllState={this.resetState}
          />
        )}
      </div>
    );
  }
}
