import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LOTTO, deepFreeze } from '../utils';

export default class PurchaseForm extends React.Component {
  static calculatePurchaseTicketCount(inputValue) {
    return Math.floor(Number(inputValue) / LOTTO.UNIT_PRICE);
  }

  static propTypes = {
    setTickets: PropTypes.func.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    isReset: PropTypes.bool.isRequired,
  };

  static initialState = deepFreeze({
    inputValue: '',
    isValid: false,
  });

  constructor(props) {
    super(props);

    this.state = { ...PurchaseForm.initialState };
    this.resetState = this.resetState.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  resetState() {
    this.setState({ ...PurchaseForm.initialState });
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
      <form className="mb-4 mt-5" onSubmit={this.handleSubmit}>
        <h2 className="text-xl font-semibold">구입할 금액을 입력해주세요.</h2>
        <div className="flex my-2">
          <label htmlFor="purchase-input" className="sr-only">
            구입 금액 입력란
          </label>
          <input
            id="purchase-input"
            type="number"
            className={cx(
              'appearance-textfield mr-2 px-3 py-2 w-full text-gray-700 leading-tight border rounded focus:outline-none shadow focus:ring-1.5',
              this.state.isValid ? 'ring-blue-700' : 'ring-rose-500'
            )}
            placeholder="구입 금액"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            disabled={this.props.tickets.length > 0}
          />
          <button
            type="submit"
            className="px-4 py-2 min-w-1/8 text-white font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded focus:outline-none focus:ring-2"
            disabled={this.props.tickets.length > 0 || !this.state.isValid}
          >
            확인
          </button>
        </div>
        {this.state.isValid ? (
          this.props.tickets.length === 0 && (
            <div className="h-4 text-blue-700">
              {`${PurchaseForm.calculatePurchaseTicketCount(this.state.inputValue)}장의 로또를 구매하실 수
                있습니다. `}
            </div>
          )
        ) : (
          <div className="h-4 text-rose-500">
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
