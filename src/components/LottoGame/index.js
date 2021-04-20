import React, { Component } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import AnnouncementTime from './AnnouncementTime';
import Modal from '../Modal';
import { getLottoResult, generateLottoNumbers } from '../../services/lottoService';
import { UNIT_AMOUNT } from '../../constants/standard';

export default class LottoGame extends Component {
  constructor() {
    super();

    this.initState = {
      purchaseAmount: '',
      isPurchaseAmountSubmitted: false,
      lottoTickets: [],
      resultNumbers: { winningNumbers: [], bonusNumber: 0 },
      isModalOpened: false,
    };

    this.state = {
      ...this.initState,
    };

    this.handleChange = this.handleChange.bind(this);
    this.publishLottoTickets = this.publishLottoTickets.bind(this);
    this.setResultNumbers = this.setResultNumbers.bind(this);
    this.openResultModal = this.openResultModal.bind(this);
    this.closeResultModal = this.closeResultModal.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  publishLottoTickets(purchaseAmount) {
    this.setState({ isPurchaseAmountSubmitted: true, purchaseAmount }, this.setLottoTickets);
  }

  setLottoTickets() {
    const amountOfLottoTicket = this.state.purchaseAmount / UNIT_AMOUNT;
    const lottoTickets = Array(amountOfLottoTicket)
      .fill()
      .map(() => generateLottoNumbers());

    this.setState({ lottoTickets });
  }

  setResultNumbers(resultNumbers) {
    this.setState({ resultNumbers });
  }

  restartGame() {
    this.setState({
      ...this.initState,
    });
  }

  openResultModal() {
    this.setState({ isModalOpened: true });
  }

  closeResultModal() {
    this.setState({ isModalOpened: false });
  }

  render() {
    const {
      purchaseAmount,
      lottoTickets,
      resultNumbers: { winningNumbers, bonusNumber },
    } = this.state;
    const lottoResult = getLottoResult(purchaseAmount, lottoTickets, winningNumbers, bonusNumber);

    return (
      <>
        <div className="flex justify-center mt-5">
          <div className="w-full">
            <h1 className="text-center">🎱 행운의 로또</h1>
            <PurchaseAmountForm
              purchaseAmount={this.state.purchaseAmount}
              isPurchaseAmountSubmitted={this.state.isPurchaseAmountSubmitted}
              handleChange={this.handleChange}
              publishLottoTickets={this.publishLottoTickets}
            />
            {this.state.isPurchaseAmountSubmitted && <AnnouncementTime />}
            {this.state.isPurchaseAmountSubmitted && <LottoTicketList lottoTickets={this.state.lottoTickets} />}
            {this.state.isPurchaseAmountSubmitted && (
              <LottoResultForm setResultNumbers={this.setResultNumbers} openResultModal={this.openResultModal} />
            )}
          </div>
        </div>
        {this.state.isModalOpened && (
          <Modal
            container={<LottoResultContainer restartGame={this.restartGame} lottoResult={lottoResult} />}
            closeModal={this.closeResultModal}
          />
        )}
      </>
    );
  }
}
