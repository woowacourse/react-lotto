import { useEffect, useState } from 'react';
import { getDate, getHours, getMinutes, getRemainedTime, getSeconds } from '../../utils/date';
import { RemainedTimeWrapper } from './RemainedTime.styles';

const RemainedTime = () => {
  const [remainTime, setRemainTime] = useState(getRemainedTime());

  useEffect(() => {
    const remainTimerId = setInterval(() => {
      setRemainTime(getRemainedTime());
    }, 1000);

    return () => clearInterval(remainTimerId);
  }, []);

  return (
    <RemainedTimeWrapper>
      <p className="remain-time-text">
        당첨발표까지 {getDate(remainTime)}일 {getHours(remainTime)}시 {getMinutes(remainTime)}분{' '}
        {getSeconds(remainTime)}초 남았습니다.
      </p>
    </RemainedTimeWrapper>
  );
};

export default RemainedTime;
