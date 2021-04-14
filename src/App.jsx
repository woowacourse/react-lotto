import React from 'react';
// import Modal from './components/Modal';
import PurchaseForm from './components/PurchaseFrom';
import TicketDetail from './components/TicketDetail';
import WinningNumberForm from './components/WinningNumberForm';
import 'tailwindcss/tailwind.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <main className="m-16 p-9 max-w-screen-sm mx-auto bg-gray-200 ">
        <h1 className="text-center text-3xl	font-bold ">🎱 행운의 로또 </h1>
        <PurchaseForm />
        <TicketDetail />
        <WinningNumberForm />
        {/* <Modal /> */}
      </main>
    );
  }
}
