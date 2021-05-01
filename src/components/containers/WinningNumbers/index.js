import { useEffect, useState } from 'react';
import WinningNumberList from './WinningNumberList';
import { Animation, Button, Title } from '../../shared';
import { getWinningNumber } from './service';
import { dummyDrawNumber } from '../../../constants';
import { countDown } from '../../../statics';
import './style.css';

const COUNT_DOWN_ANIMATION_DURATION = 3000;
const DRAW_NTH_KEY = 'drwNo';
const DRAW_DATE_KEY = 'drwNoDate';
const drawNth = dummyDrawNumber[DRAW_NTH_KEY];
const drawDate = dummyDrawNumber[DRAW_DATE_KEY].split('-').join('.');
const initialState = { isLoading: true };

export const WinningNumbers = (props) => {
  const { winningNumber, setWinningNumber, onShowUserResult } = props;
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const removeLoader = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setWinningNumber(getWinningNumber());
    setTimeout(removeLoader, COUNT_DOWN_ANIMATION_DURATION);
  }, []);

  return isLoading ? (
    <Animation animationData={countDown} height="140px" />
  ) : (
    <>
      <Title size="small">
        {drawNth}회차 당첨번호 {drawDate}
      </Title>
      <WinningNumberList number={winningNumber} />
      <Button type="button" onClick={onShowUserResult}>
        당첨결과 확인하기
      </Button>
    </>
  );
};
