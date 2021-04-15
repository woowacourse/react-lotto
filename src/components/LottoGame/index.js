import React, { Component } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import Modal from '../Modal';
import { getRandomNumber } from '../../utils/getRandomNumber';
import { LOTTO_NUMBER_COUNT, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../../constants/standard';

export default class LottoGame extends Component {
  constructor() {
    super();

    this.state = {
      purchaseAmount: 0,
      lottoTickets: [],
      resultNumbers: { winningNumbers: [], bonusNumber: 0 },
      isModalOpened: false,
    };

    this.publishLottoTickets = this.publishLottoTickets.bind(this);
    this.setResultNumbers = this.setResultNumbers.bind(this);
  }

  isPurchaseAmountSubmitted() {
    return this.state.purchaseAmount !== 0;
  }

  publishLottoTickets(purchaseAmount) {
    this.setState({ purchaseAmount }, this.setLottoTickets);
  }

  generateLottoNumbers() {
    const ticketNumbers = new Set();

    while (ticketNumbers.size < LOTTO_NUMBER_COUNT) {
      ticketNumbers.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...ticketNumbers].sort((a, b) => a - b);
  }

  setLottoTickets() {
    const amountOfLottoTicket = this.state.purchaseAmount / 1000;
    const lottoTickets = Array(amountOfLottoTicket)
      .fill()
      .map(() => this.generateLottoNumbers());

    this.setState({ lottoTickets });
  }

  setResultNumbers(resultNumbers) {
    this.setState({ resultNumbers });
  }

  render() {
    return (
      <>
        <div className="flex justify-center mt-5">
          <div className="w-full">
            <h1 className="text-center">🎱 행운의 로또</h1>
            <PurchaseAmountForm
              publishLottoTickets={this.publishLottoTickets}
              isPurchaseAmountSubmitted={this.isPurchaseAmountSubmitted()}
            />
            {this.isPurchaseAmountSubmitted() && <LottoTicketList lottoTickets={this.state.lottoTickets} />}
            {this.isPurchaseAmountSubmitted() && <LottoResultForm setResultNumbers={this.setResultNumbers} />}
          </div>
        </div>
        {this.state.isModalOpened && <Modal container={<LottoResultContainer />} />}
      </>
    );
  }
}
