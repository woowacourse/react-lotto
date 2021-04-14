import { Component } from 'react';
import ResultSection from './ResultSection';
import EarningRateSection from './EarningRateSection';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isModalOpened = this.props.isModalOpened;

    return (
      <div
        className={`modal d-flex justify-center items-center ${isModalOpened ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-inner d-flex flex-col justify-center">
          <button type="button" className="modal-close-button">
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30, 10 L 10, 30" />
            </svg>
          </button>
          <h1 className="text-center m-0">💵 당첨 결과</h1>
          <ResultSection />
          <EarningRateSection />
          <button type="button" className="restart-button basic-button mt-5">
            다시 시작하기
          </button>
        </div>
      </div>
    );
  }
}
