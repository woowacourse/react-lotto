import { useState, useEffect } from 'react';
import { ResultTable } from './ResultTable';
import { Animation, Button, Title, XButton, Record } from '../../shared';
import { getComputedResult } from './service';
import { coin } from '../../../statics';
import './style.css';

const COIN_ANIMATION_DURATION = 1500;
const initialState = {
  isLoading: true,
  result: { profit: 0, rateOfReturn: 0 },
};

export const UserResult = (props) => {
  const { lottoBundle, winningNumber, onCloseUserResult, onReset } = props;
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [result, setResult] = useState(initialState.result);
  const { profit, rateOfReturn } = result;
  const removeLoader = () => setIsLoading(false);

  useEffect(() => {
    setResult(getComputedResult(lottoBundle, winningNumber));
    setTimeout(removeLoader, COIN_ANIMATION_DURATION);
  }, []);

  return (
    <div className="UserResult UserResult--open">
      {isLoading ? (
        <div className="UserResult--loading">
          <Animation animationData={coin} speed={2} height="360px" />
        </div>
      ) : (
        <div className="UserResult__inner">
          <XButton onClick={onCloseUserResult} />
          <Title>당첨결과</Title>
          <ResultTable lottoBundle={lottoBundle} winningNumber={winningNumber} />
          <div className="Record__wrapper">
            <Record label="당첨 금액">{profit}원</Record>
            <Record label="총 수익률">{rateOfReturn}%</Record>
          </div>
          <div className="UserResult__reset_button_wrapper">
            <Button type="button" className="UserResult__reset_button" onClick={onReset}>
              다시 시작하기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
