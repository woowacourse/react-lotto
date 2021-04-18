import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils/constants';

export default class PurchaseForm extends React.Component {
  static propTypes = {
    setTickets: PropTypes.func.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { purchaseInputValue: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const ticketCount = Math.floor(Number(this.state.purchaseInputValue) / LOTTO.UNIT_PRICE);

    this.props.setTickets(ticketCount);

    alert(`총 ${ticketCount}장을 구매하였습니다.`);
  }

  handleInputChange({ target: { value } }) {
    this.setState({ purchaseInputValue: value });
  }

  render() {
    return (
      <form className="mt-5 mb-4" onSubmit={this.handleSubmit}>
        <h2 className="text-xl font-semibold ">구입할 금액을 입력해주세요.</h2>
        <div className="flex my-2">
          <label htmlFor="purchase-input" className="sr-only">
            구입 금액 입력란
          </label>
          <input
            id="purchase-input"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            placeholder="구입 금액"
            onChange={this.handleInputChange}
            value={this.state.purchaseInputValue}
            disabled={this.props.tickets.length > 0}
          />
          <button
            type="submit"
            className="font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white min-w-1/8 "
            disabled={
              this.props.tickets.length > 0 ||
              this.state.purchaseInputValue < LOTTO.MIN_PRICE ||
              this.state.purchaseInputValue > LOTTO.MAX_PRICE
            }
          >
            확인
          </button>
        </div>
      </form>
    );
  }
}
