import { useState, useLayoutEffect } from 'react';
import { RemainedTimeIndicatorWrapper } from './RemainedTimeIndicator.styles';

import { getRemainedTime } from '../../utils/date';
import { GREENWICH_MILLISECONDS } from '../../services/game';

const RemainedTimeIndicator = () => {
  let remainedTimeTimeout: NodeJS.Timeout | undefined = undefined;
  const [remainedTime, setRemainedTime] = useState<Date>(new Date());

  useLayoutEffect(() => {
    remainedTimeTimeout = setInterval(() => {
      setRemainedTime(state => new Date(getRemainedTime() - GREENWICH_MILLISECONDS));
    }, 1000);
    return () => remainedTimeTimeout && clearInterval(remainedTimeTimeout);
  }, []);

  const getRemainedTimeText = () => {
    return `${remainedTime.getDate()}일 ${remainedTime.getHours()}시 ${remainedTime.getMinutes()}분 ${remainedTime.getSeconds()}초`;
  };

  return (
    <RemainedTimeIndicatorWrapper>
      <p className="remain-time-text">{getRemainedTimeText()}</p>
    </RemainedTimeIndicatorWrapper>
  );
};

export default RemainedTimeIndicator;
