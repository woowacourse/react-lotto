import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import propTypesRange from "../CustomPropTypes/propTypesRange";

const Header = styled.h2`
  text-align: center;
  font-size: 0.9rem;
`;

const Timer = styled.div`
  text-align: center;
`;

const TimerItems = styled.span`
  font-size: 1.3rem;
  margin: 0 0.3rem;
`;

const getLeftTime = (target) => {
  const today = new Date();
  const targetDate = new Date();
  let dayDiff = target.day - today.getDay();

  targetDate.setHours(target.hours, target.minutes, target.second);
  if (dayDiff === 0 && targetDate.getTime() - today.getTime() < 0) {
    dayDiff = 7; // 같은 날 target 시간 이후에는 7일 남은 것으로 처리
  }
  targetDate.setDate(targetDate.getDate() + dayDiff);

  const timeDiff = Math.floor(
    (targetDate.getTime() - new Date().getTime()) / 1000
  );

  return {
    day: Math.floor(timeDiff / (24 * 3600)),
    hours: Math.floor(timeDiff / 3600) % 24,
    minutes: Math.floor(timeDiff / 60) % 60,
    second: timeDiff % 60,
  };
};

const WeeklyTimer = ({ target }) => {
  const [leftTime, setLeftTime] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    second: 0,
  });

  useEffect(() => {
    setLeftTime(getLeftTime(target));
    const timer = setInterval(() => setLeftTime(getLeftTime(target)), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header>당첨 결과 발표까지</Header>
      <Timer>
        <TimerItems>{leftTime.day}일</TimerItems>
        <TimerItems>{leftTime.hours}시간</TimerItems>
        <TimerItems>{leftTime.minutes}분</TimerItems>
        <TimerItems>{leftTime.second}초</TimerItems>
      </Timer>
    </div>
  );
};

WeeklyTimer.propTypes = {
  target: PropTypes.shape({
    day: propTypesRange(0, 6, true),
    hours: propTypesRange(0, 23, true),
    minutes: propTypesRange(0, 59, true),
    second: propTypesRange(0, 59, true),
  }),
};

export default WeeklyTimer;
