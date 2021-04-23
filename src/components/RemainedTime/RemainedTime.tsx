import { useEffect, useState } from 'react';
import { getDate, getHours, getMinutes, getRemainedTime, getSeconds } from '../../utils/date';
import { RemainedTimeWrapper } from './RemainedTime.styles';

const RemainedTime = () => {
  const [remainTime, setRemainTime] = useState(0);

  const date = getDate(remainTime);
  const hours = getHours(remainTime);
  const minutes = getMinutes(remainTime);
  const seconds = getSeconds(remainTime);

  const remainTimerId = setInterval(() => {
    setRemainTime(getRemainedTime());
  }, 1000);

  useEffect(() => clearInterval(remainTimerId));

  return (
    <RemainedTimeWrapper>
      <p className="remain-time-text">
        당첨발표까지 {date}일 {hours}시 {minutes}분 {seconds}초 남았습니다.
      </p>
    </RemainedTimeWrapper>
  );
};

export default RemainedTime;
