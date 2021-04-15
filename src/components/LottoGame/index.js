import React, { Component } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import Modal from '../Modal';

export default class LottoGame extends Component {
  constructor() {
    super();

    this.state = {
      purchaseAmount: 0,
      lottoTickets: [],
      resultNumberList: [],
      isModalOpened: false,
    };

    this.setPurchaseAmount = this.setPurchaseAmount.bind(this);
  }

  isPurchaseAmountSubmitted() {
    return this.state.purchaseAmount !== 0;
  }

  setPurchaseAmount(purchaseAmount) {
    this.setState({ purchaseAmount });
  }

  render() {
    return (
      <>
        <div className="flex justify-center mt-5">
          <div className="w-full">
            <h1 className="text-center">🎱 행운의 로또</h1>
            <PurchaseAmountForm
              setPurchaseAmount={this.setPurchaseAmount}
              isPurchaseAmountSubmitted={this.isPurchaseAmountSubmitted()}
            />
            {this.isPurchaseAmountSubmitted() && <LottoTicketList />}
            {this.isPurchaseAmountSubmitted() && <LottoResultForm />}
          </div>
        </div>
        {this.state.isModalOpened && <Modal container={<LottoResultContainer />} />}
      </>
    );
  }
}
