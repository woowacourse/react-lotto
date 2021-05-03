import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { generateLottoNumbers } from './utils';
import { PurchaseForm, TicketDetail, WinningNumberForm, Modal, WinningResult } from './components';

const defaultState = { tickets: [], winningNumbers: [], bonusNumber: 0, isModalOpen: false };

const Lotto = ({ onReset }) => {
  const [tickets, setTickets] = useState(defaultState.tickets);
  const [winningNumbers, setWinningNumbers] = useState(defaultState.winningNumbers);
  const [bonusNumber, setBonusNumber] = useState(defaultState.bonusNumber);
  const [isModalOpen, setIsModalOpen] = useState(defaultState.isModalOpen);

  const hasTickets = tickets.length > 0;

  useEffect(() => {
    const isOpen = [tickets.length > 0, winningNumbers.length > 0, bonusNumber > 0].every(Boolean);

    setIsModalOpen(isOpen);
  }, [tickets, winningNumbers, bonusNumber]);

  const setTicketCount = (ticketCount) => {
    setTickets(Array.from({ length: ticketCount }, generateLottoNumbers));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="m-16 mx-auto p-9 max-w-screen-sm bg-white rounded-xl focus:ring-red-500">
        <h1 className="text-4xl	font-bold mb-14 text-center space-x-2">
          <span role="img" aria-label="good-luck">
            🎱
          </span>
          <span>행운의 로또</span>
        </h1>
        <PurchaseForm setTicketCount={setTicketCount} isDisabled={hasTickets} />
        {hasTickets && (
          <>
            <TicketDetail tickets={tickets} />
            <WinningNumberForm setWinningNumbers={setWinningNumbers} setBonusNumber={setBonusNumber} />
          </>
        )}
      </main>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <WinningResult
            onReset={onReset}
            tickets={tickets}
            winningNumbers={winningNumbers}
            bonusNumber={bonusNumber}
          />
        </Modal>
      )}
    </>
  );
};

Lotto.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default Lotto;
