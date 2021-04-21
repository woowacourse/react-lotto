import React, { memo, useState } from 'react';
import useInterval from '../../hook/useInterval';
import { LOTTO_RAFFLE_DAY } from '../../constants/lottoData';
import { extractRemainingDatesUntilDDay } from '../../utils/dday';

const getLottoResultRemainingTime = () => {
  const now = new Date();
  const lottoRaffleDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + LOTTO_RAFFLE_DAY.DAY - now.getDay(),
    LOTTO_RAFFLE_DAY.HOUR,
    LOTTO_RAFFLE_DAY.MINUTES,
  );

  return (lottoRaffleDay - now) / 1000;
};

const CountdownSection = memo(() => {
  const lottoResultRemainingTime = getLottoResultRemainingTime();

  const [countdown, setCountdown] = useState(extractRemainingDatesUntilDDay(lottoResultRemainingTime));
  const { day, hour, minutes, seconds } = countdown;

  useInterval(
    () => {
      setCountdown(extractRemainingDatesUntilDDay(lottoResultRemainingTime - 1));
    },
    lottoResultRemainingTime ? 1000 : null,
  );

  return (
    <section>
      <span>
        로또 추첨일까지 {day ? `${day}일` : ''} {hour ? `${hour}시간` : ''} {minutes ? `${minutes}분` : ''} {seconds}초
        남았습니다.
      </span>
    </section>
  );
});

export default CountdownSection;
