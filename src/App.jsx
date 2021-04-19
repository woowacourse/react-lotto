import React from 'react';
import generateLottoNumbers from './utils/generateTicket';
import PurchaseForm from './components/PurchaseForm';
import TicketDetail from './components/TicketDetail';
import WinningNumberForm from './components/WinningNumberForm';
import Modal from './components/Modal';

import 'tailwindcss/tailwind.css';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      tickets: [],
      winningNumbers: [],
      bonusNumber: 0,
      isModalOpen: false,
    };

    this.state = { ...this.initialState };

    this.setTickets = this.setTickets.bind(this);
    this.setWinningNumbers = this.setWinningNumbers.bind(this);
    this.setBonusNumber = this.setBonusNumber.bind(this);
    this.setIsModalOpen = this.setIsModalOpen.bind(this);

    this.resetState = this.resetState.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleDimmedClick = this.handleDimmedClick.bind(this);
  }

  setTickets(ticketCount) {
    this.setState({ tickets: Array.from({ length: ticketCount }, generateLottoNumbers) }, this.setIsModalOpen);
  }

  setWinningNumbers(winningNumbers) {
    this.setState({ winningNumbers }, this.setIsModalOpen);
  }

  setBonusNumber(bonusNumber) {
    this.setState({ bonusNumber }, this.setIsModalOpen);
  }

  setIsModalOpen() {
    this.setState({
      isModalOpen: this.state.tickets.length > 0 && this.state.winningNumbers.length > 0 && this.state.bonusNumber > 0,
    });
  }

  resetState() {
    this.setState({ ...this.initialState });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleKeyUp({ key }) {
    if (!this.state.isModalOpen) {
      return;
    }

    const table = {
      Escape: () => this.closeModal(),
      ' ': () => this.resetState(),
    };

    return table[key]?.();
  }

  handleDimmedClick({ target }) {
    if (this.state.isModalOpen && target.classList.contains('modal')) {
      this.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('click', this.handleDimmedClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('click', this.handleDimmedClick);
  }

  render() {
    const isReset = this.state.winningNumbers.length === 0 && this.state.bonusNumber === 0;

    return (
      <>
        <main className="m-16 p-9 max-w-screen-sm mx-auto rounded-xl bg-white">
          <h1 className="text-center text-3xl	font-bold">
            <span role="img" aria-label="good-luck">
              🎱
            </span>
            {' 행운의 로또'}
          </h1>
          <PurchaseForm setTickets={this.setTickets} tickets={this.state.tickets} isReset={isReset} />
          {this.state.tickets.length > 0 && (
            <>
              <TicketDetail tickets={this.state.tickets} />
              <WinningNumberForm
                setWinningNumbers={this.setWinningNumbers}
                setBonusNumber={this.setBonusNumber}
                isReset={isReset}
              />
            </>
          )}
        </main>
        {this.state.isModalOpen && (
          <Modal
            tickets={this.state.tickets}
            winningNumbers={this.state.winningNumbers}
            bonusNumber={this.state.bonusNumber}
            reset={this.resetState}
            close={this.closeModal}
          />
        )}
      </>
    );
  }
}
