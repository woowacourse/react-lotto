import React, { memo, useEffect, useState } from 'react';
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
  const [countdown, setCountdown] = useState({});
  const { day, hour, minutes, seconds } = countdown;

  useEffect(() => {
    let lottoResultRemainingTime = getLottoResultRemainingTime();

    const startCountdown = () => {
      setCountdown(extractRemainingDatesUntilDDay(lottoResultRemainingTime));
    };

    startCountdown();
    const interval = setInterval(() => {
      if (lottoResultRemainingTime === 0) {
        clearInterval(interval);

        return;
      }

      lottoResultRemainingTime -= 1;
      startCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
