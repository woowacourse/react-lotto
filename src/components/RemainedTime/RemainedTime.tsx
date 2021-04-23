import { useEffect, useState } from 'react';
import { GREENWICH_MILLISECONDS, TIMER_TICK } from '../../constants/timer';
import { getRemainedTime } from '../../utils/date';
import { RemainedTimeWrapper } from './RemainedTime.styles';

const RemainedTime = () => {
  let remainTimer: NodeJS.Timeout | null = null;
  const [remainTime, setRemainTime] = useState<Date | null>(null);

  const handleRemainedTime = () => {
    setRemainTime(new Date(getRemainedTime() - GREENWICH_MILLISECONDS));
    remainTimer = setInterval(() => {
      setRemainTime(new Date(getRemainedTime() - GREENWICH_MILLISECONDS));
    }, TIMER_TICK);
  };

  useEffect(() => {
    handleRemainedTime();
  }, []);

  return (
    <RemainedTimeWrapper>
      🎯 로또 당첨 발표까지 🎯
      <p className="remain-time-text">
        <span>{remainTime?.getDate()}</span> 일&nbsp;
        <span>{remainTime?.getHours()}</span> 시간&nbsp;
        <span>{remainTime?.getMinutes()}</span> 분&nbsp;
        <span>{remainTime?.getSeconds()}</span> 초
      </p>
      남았습니다.
    </RemainedTimeWrapper>
  );
};

export default RemainedTime;
