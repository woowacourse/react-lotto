import { Component } from 'react';
import ResultSection from './ResultSection';
import EarningRateSection from './EarningRateSection';

export default class Modal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="modal" role="dialog" aria-modal="true">
        <button type="button" className="modal-close">
          <svg viewbox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <h1>당첨 결과</h1>
        <ResultSection />
        <EarningRateSection />
        <button type="button">다시 시작하기</button>
      </div>
    );
  }
}
