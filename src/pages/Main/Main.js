import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import { ALERT_MESSAGE, LOTTO, PATH } from '../../constants';
import { getRandomId, shuffle } from '../../utils';
import { Styled } from './Main.style';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      moneyInput: '',
      lottoList: {},
      isNumberShowing: false,
    };

    this.handleSubmitMoneyInput = this.handleSubmitMoneyInput.bind(this);
    this.handleChangeMoneyInput = this.handleChangeMoneyInput.bind(this);
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this);
    this.handleClickEnterWinning = this.handleClickEnterWinning.bind(this);
  }

  generateLotto(baseNumberList) {
    const lottoId = getRandomId();
    const lottoNumberList = shuffle(baseNumberList)
      .slice(0, LOTTO.COUNT)
      .sort((a, b) => a - b);

    return { [lottoId]: lottoNumberList };
  }

  purchaseLottoList() {
    const { moneyInput } = this.state;

    const count = Math.floor(moneyInput / LOTTO.PRICE);
    const baseNumberList = Array.from({ length: LOTTO.MAX_NUMBER }, (_, index) => index + 1);
    let newLottoList = {};

    Array.from({ length: count }, () => {
      const lotto = this.generateLotto(baseNumberList);
      newLottoList = { ...newLottoList, ...lotto };
    });

    this.setState({ lottoList: newLottoList });
  }

  handleSubmitMoneyInput(event) {
    event.preventDefault();

    this.purchaseLottoList();
  }

  handleChangeMoneyInput(event) {
    this.setState({ moneyInput: Number(event.target.value) });
  }

  handleToggleSwitch(event) {
    this.setState({ isNumberShowing: event.target.checked });
  }

  handleClickEnterWinning() {
    const { lottoList, moneyInput } = this.state;
    const { history } = this.props;

    if (!moneyInput || Object.entries(lottoList).length <= 0) {
      alert(ALERT_MESSAGE.NO_PURCHASED_LOTTO);
      return;
    }

    history.push({
      pathname: PATH.ENTER_WINNING,
      state: { lottoList, moneyInput },
    });
  }

  render() {
    const { lottoList, moneyInput, isNumberShowing } = this.state;
    const lottoCount = Object.entries(lottoList).length;

    return (
      <Styled.Container>
        <form onSubmit={this.handleSubmitMoneyInput}>
          <input
            type="number"
            value={moneyInput}
            min={LOTTO.PRICE}
            onChange={this.handleChangeMoneyInput}
            disabled={lottoCount > 0 ? 'disabled' : ''}
            required
            autoFocus
          />
          <Button type="submit" disabled={lottoCount > 0 ? 'disabled' : ''}>
            구입
          </Button>
        </form>
        <div>
          <p>
            현재 구입한 로또 <span>{lottoCount}</span>개
          </p>
          <ToggleSwitch
            title="번호 보기"
            isChecked={isNumberShowing}
            onChange={this.handleToggleSwitch}
          />
          {isNumberShowing && <LottoNumberList lottoList={lottoList} />}
        </div>
        <Button onClick={this.handleClickEnterWinning}>🤩 당첨 번호 입력</Button>
      </Styled.Container>
    );
  }
}

export default Main;
