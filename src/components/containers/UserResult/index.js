/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserResultTable } from './UserResultTable';
import { Animation, Button, Modal, Record, Title, XButton } from '../../shared';
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
  const onClickDimmedArea = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    onCloseUserResult();
  };
  const modalAriaLabel = { title: 'user-result-title', desc: 'user-result-desc' };

  useEffect(() => {
    setResult(getComputedResult(lottoBundle, winningNumber));
    setTimeout(removeLoader, COIN_ANIMATION_DURATION);
  }, []);

  return (
    <Modal
      isLoading={isLoading}
      loading={<Animation animationData={coin} speed={2} height="360px" />}
      onClickDimmedArea={onClickDimmedArea}
      aria-labelledby={modalAriaLabel.title}
      aria-describedby={modalAriaLabel.desc}
    >
      <>
        <XButton onClick={onCloseUserResult} />
        <Title id={modalAriaLabel.title}>당첨결과</Title>
        <UserResultTable lottoBundle={lottoBundle} winningNumber={winningNumber} />
        <div className="Record__wrapper" id={modalAriaLabel.desc}>
          <Record label="당첨 금액">{profit}원</Record>
          <Record label="총 수익률">{rateOfReturn}%</Record>
        </div>
        <div className="UserResult__reset_button_wrapper">
          <Button type="button" className="UserResult__reset_button" onClick={onReset}>
            다시 시작하기
          </Button>
        </div>
      </>
    </Modal>
  );
};

UserResult.propTypes = {
  lottoBundle: PropTypes.array.isRequired,
  winningNumber: PropTypes.object.isRequired,
  onCloseUserResult: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
