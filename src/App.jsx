import React from 'react';
import generateLottoNumbers from './utils/generateTicket';
import PurchaseForm from './components/PurchaseFrom';
import TicketDetail from './components/TicketDetail';
import WinningNumberForm from './components/WinningNumberForm';
// import Modal from './components/Modal';

import 'tailwindcss/tailwind.css';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
    };

    this.setTickets = this.setTickets.bind(this);
  }

  setTickets(ticketCount) {
    this.setState({ tickets: Array.from({ length: ticketCount }, generateLottoNumbers) });
  }

  render() {
    return (
      <main className="m-16 p-9 max-w-screen-sm mx-auto bg-gray-200 ">
        <h1 className="text-center text-3xl	font-bold ">🎱 행운의 로또 </h1>
        <PurchaseForm setTickets={this.setTickets} />
        <TicketDetail tickets={this.state.tickets} />
        <WinningNumberForm />
        {/* <Modal /> */}
      </main>
    );
  }
}
