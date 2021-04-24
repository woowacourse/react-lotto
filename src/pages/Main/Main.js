import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList';
import PageTitle from '../../components/PageTitle/PageTitle';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import { ALERT_MESSAGE, LOTTO, PATH } from '../../constants';
import { purchaseLottoList } from '../../services/Main';
import { isEmptyObject } from '../../utils';
import { Styled } from './Main.style';

const Main = (props) => {
  const [moneyInput, setMoneyInput] = useState('');
  const [lottoList, setLottoList] = useState({});
  const [isNumberShowing, setIsNumberShowing] = useState(false);
  const history = useHistory();

  const lottoCount = Object.entries(lottoList).length;

  const handleSubmitMoneyInput = (event) => {
    event.preventDefault();

    const newLottoList = purchaseLottoList(moneyInput);
    setLottoList(newLottoList);
  };

  const handleChangeMoneyInput = (event) => {
    setMoneyInput(Number(event.target.value));
  };

  const handleToggleSwitch = (event) => {
    setIsNumberShowing(event.target.checked);
  };

  const handleClickEnterWinning = () => {
    if (!moneyInput || isEmptyObject(lottoList)) {
      alert(ALERT_MESSAGE.NO_PURCHASED_LOTTO);
      return;
    }

    history.push({
      pathname: PATH.ENTER_WINNING,
      state: { lottoList, moneyInput },
    });
  };

  return (
    <>
      <PageTitle>로또 구매</PageTitle>

      <Styled.Form onSubmit={handleSubmitMoneyInput}>
        <Styled.MoneyInput
          type="number"
          value={moneyInput}
          min={LOTTO.PRICE}
          onChange={handleChangeMoneyInput}
          disabled={lottoCount > 0 ? 'disabled' : ''}
          placeholder="돈을 내시오"
          required
          autoFocus
        />
        <Button type="submit" disabled={lottoCount > 0 ? 'disabled' : ''} minWidth={'80px'}>
          구입
        </Button>
      </Styled.Form>

      <Styled.LottoListTop>
        <Styled.LottoCountContainer>
          현재 구입한 로또 <Styled.LottoCount>{lottoCount}</Styled.LottoCount>개
        </Styled.LottoCountContainer>
        <ToggleSwitch title="번호 보기" isChecked={isNumberShowing} onChange={handleToggleSwitch} />
      </Styled.LottoListTop>

      {isNumberShowing && <LottoNumberList lottoList={lottoList} />}

      <Button onClick={handleClickEnterWinning}>🤩 당첨 번호 입력</Button>
    </>
  );
};

export default Main;
