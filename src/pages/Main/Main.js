import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList';
import PageTitle from '../../components/PageTitle/PageTitle';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import { ALERT_MESSAGE, LOTTO, PATH } from '../../constants';
import { purchaseLottoList } from '../../services/Main';
import { Styled } from './Main.style';

class Main extends Component {
  constructor(props) {
    super(props);

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

  handleSubmitMoneyInput(event) {
    event.preventDefault();

    const newLottoList = purchaseLottoList(this.state.moneyInput);
    this.setState({ lottoList: newLottoList });
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
        <PageTitle>로또 구매</PageTitle>
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
