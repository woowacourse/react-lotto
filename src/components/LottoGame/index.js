import React, { Component } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import Modal from '../Modal';

export default class LottoGame extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-center mt-5">
          <div className="w-100">
            <h1 className="text-center">🎱 행운의 로또</h1>
            <PurchaseAmountForm />
            <LottoTicketList />
            <LottoResultForm />
          </div>
        </div>
        <Modal container={<LottoResultContainer />} />
      </>
    );
  }
}
