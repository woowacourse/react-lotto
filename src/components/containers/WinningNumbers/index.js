import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLoading } from '../../../hooks';
import { WinningNumberList } from './WinningNumberList';
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

export const WinningNumbers = (props) => {
  const { winningNumber, setWinningNumber, onShowUserResult } = props;
  const { isLoaded, completeLoading } = useLoading(false);

  useEffect(() => {
    setWinningNumber(getWinningNumber());
    setTimeout(completeLoading, COUNT_DOWN_ANIMATION_DURATION);
  }, []);

  return isLoaded ? (
    <>
      <Title size="small">
        {drawNth}회차 당첨번호 {drawDate}
      </Title>
      <WinningNumberList number={winningNumber} />
      <Button type="button" onClick={onShowUserResult}>
        당첨결과 확인하기
      </Button>
    </>
  ) : (
    <Animation animationData={countDown} height="140px" />
  );
};

WinningNumbers.propTypes = {
  winningNumber: PropTypes.object.isRequired,
  setWinningNumber: PropTypes.func.isRequired,
  onShowUserResult: PropTypes.func.isRequired,
};
