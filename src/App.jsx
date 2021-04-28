import React from 'react';
import generateLottoNumbers from './utils/generateTicket';
import PurchaseForm from './components/PurchaseForm';
import TicketDetail from './components/TicketDetail';
import WinningNumberForm from './components/WinningNumberForm';
import Modal from './components/Modal';
import WinningResult from './components/WinningResult';

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

    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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
      isModalOpen: [
        this.state.tickets.length > 0,
        this.state.winningNumbers.length > 0,
        this.state.bonusNumber > 0,
      ].every(Boolean),
    });
  }

  handleResetClick() {
    this.setState({ ...this.initialState });
  }

  handleModalClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const isReset = this.state.winningNumbers.length === 0 && this.state.bonusNumber === 0;

    return (
      <>
        <main className="m-16 mx-auto p-9 max-w-screen-sm bg-white rounded-xl focus:ring-red-500">
          <h1 className="text-4xl	font-bold mb-14 text-center space-x-2">
            <span role="img" aria-label="good-luck">
              🎱
            </span>
            <span>행운의 로또</span>
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
          <Modal onClose={this.handleModalClose}>
            <WinningResult
              onReset={this.handleResetClick}
              tickets={this.state.tickets}
              winningNumbers={this.state.winningNumbers}
              bonusNumber={this.state.bonusNumber}
            />
          </Modal>
        )}
      </>
    );
  }
}
