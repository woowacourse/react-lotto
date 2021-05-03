import { LOTTO_PRICE, MESSAGE } from '../../constants';

export default function PurchaseForm({ lottoCount, setLottoCount, setMoneyInput, moneyInput }) {
  const isActive = lottoCount === 0;
  const isValidPrice = moneyInput % LOTTO_PRICE === 0;

  const onSubmitPurchaseForm = (event) => {
    event.preventDefault();

    if (!isValidPrice) {
      alert(MESSAGE.ALERT.INVALID_MONEY_UNIT);
      return;
    }

    setLottoCount(moneyInput / LOTTO_PRICE);
  };

  const onMoneyInputChange = ({ target }) => {
    setMoneyInput(target.valueAsNumber);
  };

  return (
    <section className="mt-5">
      <form className="w-100" onSubmit={onSubmitPurchaseForm}>
        <div className="d-flex justify-space-between items-center mt-1">
          <label className="w-100 mr-3">
            구입할 금액을 입력해주세요. (단위: 원)
            <input
              className="money-input flex-auto mr-3"
              name="money-input"
              type="number"
              placeholder="구입 금액"
              min="1000"
              max="100000"
              value={moneyInput || ''}
              onChange={onMoneyInputChange}
              required
              disabled={isActive ? false : true}
            />
          </label>
          <button
            type="submit"
            className="basic-button align-self-end money-submit-button"
            disabled={isActive ? false : true}
          >
            확인
          </button>
        </div>
      </form>
    </section>
  );
}
