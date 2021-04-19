import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils/constants';

export default class PurchaseForm extends React.Component {
  static calculatePurchaseTicketCount(inputValue) {
    return Math.floor(Number(inputValue) / LOTTO.UNIT_PRICE);
  }

  static propTypes = {
    setTickets: PropTypes.func.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    isReset: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.initialState = {
      inputValue: '',
      isValid: false,
    };

    this.state = { ...this.initialState };
    this.resetState = this.resetState.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  resetState() {
    this.setState({ ...this.initialState });
  }

  handleSubmit(event) {
    event.preventDefault();

    const ticketCount = PurchaseForm.calculatePurchaseTicketCount(this.state.inputValue);

    this.props.setTickets(ticketCount);
  }

  handleInputChange({ target: { value, valueAsNumber } }) {
    this.setState({
      inputValue: value,
      isValid: !(value === '' || valueAsNumber < LOTTO.MIN_PRICE || valueAsNumber > LOTTO.MAX_PRICE),
    });
  }

  render() {
    return (
      <form className="mt-5 mb-4" onSubmit={this.handleSubmit}>
        <h2 className="text-xl font-semibold">구입할 금액을 입력해주세요.</h2>
        <div className="flex my-2">
          <label htmlFor="purchase-input" className="sr-only">
            구입 금액 입력란
          </label>
          <input
            id="purchase-input"
            type="number"
            className={`
              w-full py-2 px-3 appearance-textfield border rounded shadow text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline mr-2 focus:ring-1.5
              ${this.state.isValid ? 'ring-blue-700' : 'ring-rose-500'}
            `}
            placeholder="구입 금액"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            disabled={this.props.tickets.length > 0}
          />
          <button
            type="submit"
            className="font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white min-w-1/8 "
            disabled={this.props.tickets.length > 0 || !this.state.isValid}
          >
            확인
          </button>
        </div>
        {this.state.isValid ? (
          this.props.tickets.length === 0 && (
            <div className="text-blue-700 h-4 ">
              {`${PurchaseForm.calculatePurchaseTicketCount(this.state.inputValue)}장의 로또를 구매하실 수
                있습니다. `}
            </div>
          )
        ) : (
          <div className="text-rose-500 h-4 ">
            {`${LOTTO.MIN_PRICE.toLocaleString('en-US')}원 이상 ${LOTTO.MAX_PRICE.toLocaleString('en-US')}원 이하의
            금액을 입력해주세요.`}
          </div>
        )}
      </form>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.isReset && !prevProps.isReset) {
      this.resetState();
    }
  }
}
