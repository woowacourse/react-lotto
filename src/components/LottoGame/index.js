import React, { Component } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import Modal from '../Modal';
import { getRandomNumber } from '../../utils/getRandomNumber';
import {
  UNIT_AMOUNT,
  LOTTO_NUMBER_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  HIT_COUNT,
  WINNING_RANK,
  PROFITS,
  RANK,
} from '../../constants/standard';

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
    this.openResultModal = this.openResultModal.bind(this);
    this.closeResultModal = this.closeResultModal.bind(this);
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
    const amountOfLottoTicket = this.state.purchaseAmount / UNIT_AMOUNT;
    const lottoTickets = Array(amountOfLottoTicket)
      .fill()
      .map(() => this.generateLottoNumbers());

    this.setState({ lottoTickets });
  }

  setResultNumbers(resultNumbers) {
    this.setState({ resultNumbers });
  }

  getLottoResult() {
    const rankCount = this.getRankCount();
    const earningRate = this.getEarningRate(rankCount);

    return { rankCount, earningRate };
  }

  getRankCount() {
    const rankCount = {
      [WINNING_RANK.FIRST]: 0,
      [WINNING_RANK.SECOND]: 0,
      [WINNING_RANK.THIRD]: 0,
      [WINNING_RANK.FOURTH]: 0,
      [WINNING_RANK.FIFTH]: 0,
    };

    this.state.lottoTickets.forEach(ticket => {
      const rank = this.getRank(ticket);
      rank && rankCount[rank]++;
    });

    return rankCount;
  }

  getRank(ticket) {
    const hasBonusNumber = ticket.includes(this.state.resultNumbers.bonusNumber);
    const winnigCount = LOTTO_NUMBER_COUNT * 2 - new Set([...ticket, ...this.state.resultNumbers.winningNumbers]).size;
    const winningRank = hasBonusNumber && winnigCount === HIT_COUNT.FIVE ? WINNING_RANK.SECOND : RANK[winnigCount];

    return winningRank;
  }

  getEarningRate(rankCount) {
    const totalProfit = Object.entries(rankCount).reduce((acc, [rank, count]) => acc + PROFITS[rank] * count, 0);
    const earningRate = Number(
      (((totalProfit - this.state.purchaseAmount) / this.state.purchaseAmount) * 100).toFixed(2)
    );

    return earningRate;
  }

  openResultModal() {
    this.setState({ isModalOpened: true });
  }

  closeResultModal() {
    this.setState({ isModalOpened: false });
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
            {this.isPurchaseAmountSubmitted() && (
              <LottoResultForm setResultNumbers={this.setResultNumbers} openResultModal={this.openResultModal} />
            )}
          </div>
        </div>
        {this.state.isModalOpened && (
          <Modal
            container={<LottoResultContainer lottoResult={this.getLottoResult()} />}
            closeModal={this.closeResultModal}
          />
        )}
      </>
    );
  }
}
