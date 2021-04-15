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
      <>
        <h2>로또 구매</h2>
        <Styled.Form onSubmit={this.handleSubmitMoneyInput}>
          <Styled.MoneyInput
            type="number"
            value={moneyInput}
            min={LOTTO.PRICE}
            onChange={this.handleChangeMoneyInput}
            disabled={lottoCount > 0 ? 'disabled' : ''}
            placeholder="돈을 내시오"
            required
            autoFocus
          />
          <Button type="submit" disabled={lottoCount > 0 ? 'disabled' : ''}>
            구입
          </Button>
        </Styled.Form>
        <Styled.LottoListTop>
          <Styled.LottoCountContainer>
            현재 구입한 로또 <Styled.LottoCount>{lottoCount}</Styled.LottoCount>개
          </Styled.LottoCountContainer>
          <ToggleSwitch
            title="번호 보기"
            isChecked={isNumberShowing}
            onChange={this.handleToggleSwitch}
          />
        </Styled.LottoListTop>
        {isNumberShowing && <LottoNumberList lottoList={lottoList} />}
        <Button onClick={this.handleClickEnterWinning}>🤩 당첨 번호 입력</Button>
      </>
    );
  }
}

export default Main;
