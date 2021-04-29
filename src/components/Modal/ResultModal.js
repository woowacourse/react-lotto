import { ResultSection, EarningRateSection } from '.';

export default function ResultModal({ closeModal, winningCounts, paidMoney, resetAllState }) {
  const handleDimmedClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const handleEscapeKeyDown = (event) => {
    if (event.key !== 'Esc' && event.key !== 'Escape') return;

    closeModal();
  };

  return (
    <div
      className="modal d-flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      onMouseDown={handleDimmedClick}
      onKeyDown={handleEscapeKeyDown}
      tabIndex="0"
    >
      <div className="modal-inner d-flex flex-col justify-center">
        <button type="button" className="modal-close-button" onClick={closeModal}>
          <svg viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30, 10 L 10, 30" />
          </svg>
        </button>
        <h1 className="text-center m-0">💵 당첨 결과</h1>
        <ResultSection winningCounts={winningCounts} />
        <EarningRateSection paidMoney={paidMoney} winningCounts={winningCounts} />
        <button type="button" className="restart-button basic-button mt-5" onClick={resetAllState}>
          다시 시작하기
        </button>
      </div>
    </div>
  );
}
