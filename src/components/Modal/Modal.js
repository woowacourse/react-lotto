import { Component } from 'react';
import { ResultSection, EarningRateSection } from '.';

export default class Modal extends Component {
  handleDimmedClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  handleEscapeKeyDown = (event) => {
    if (event.key !== 'Esc' && event.key !== 'Escape') return;

    this.props.closeModal();
  };

  render() {
    return (
      <div
        className="modal d-flex justify-center items-center"
        role="dialog"
        aria-modal="true"
        onMouseDown={this.handleDimmedClick}
        onKeyDown={this.handleEscapeKeyDown}
        tabIndex="0"
      >
        <div className="modal-inner d-flex flex-col justify-center">
          <button type="button" className="modal-close-button" onClick={this.props.closeModal}>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30, 10 L 10, 30" />
            </svg>
          </button>
          <h1 className="text-center m-0">💵 당첨 결과</h1>
          <ResultSection winningCounts={this.props.winningCounts} />
          <EarningRateSection
            paidMoney={this.props.paidMoney}
            winningCounts={this.props.winningCounts}
          />
          <button
            type="button"
            className="restart-button basic-button mt-5"
            onClick={this.props.resetAllState}
          >
            다시 시작하기
          </button>
        </div>
      </div>
    );
  }
}
