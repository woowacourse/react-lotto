import React, { useState } from 'react';
import Modal from '../Modal';
import Receipt from '../Receipt';
import WinningNumber from '../WinningNumber';
import { hideScroll, showScroll } from '../../utils/scroll';

const PurchaseForm = ({
  lotto,
  moneyAmount,
  receipt,
  handleResetButtonClick,
  handleWinningNumberSubmit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalButtonClick = () => {
    setIsModalOpen(true);
    hideScroll();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    showScroll();
  };

  return (
    <>
      <Receipt receipt={receipt} />
      <WinningNumber
        onHandleSubmit={(winningNumbers, bonusNumber) =>
          handleWinningNumberSubmit({ winningNumbers, bonusNumber })
        }
        onModalButtonClick={handleModalButtonClick}
      />

      {isModalOpen && (
        <Modal
          winningNumber={lotto.numbers}
          bonusNumber={lotto.bonus}
          receipt={receipt}
          moneyAmount={moneyAmount}
          onResetButtonClick={handleResetButtonClick}
          onModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default PurchaseForm;
