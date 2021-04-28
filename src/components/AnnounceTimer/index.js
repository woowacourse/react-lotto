import React, { useState, useEffect } from 'react';
import { Root, TimerWrapper, Title, TimeArea } from './style';

const AnnounceTimer = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      timePass();
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  const timePass = () => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(this.timerId);
      return;
    }

    const nextMinutes = seconds > 0 ? minutes : minutes - 1;
    const nextSeconds = seconds > 0 ? seconds - 1 : 59;
    setMinutes(nextMinutes);
    setSeconds(nextSeconds);
  };

  const currentTime = String(minutes).padStart(2, '0') + ': ' + String(seconds).padStart(2, '0');

  return (
    <Root>
      <TimerWrapper>
        <Title>🎉 당첨 발표까지 남은 시간 🥂</Title>
        <TimeArea>{currentTime}</TimeArea>
      </TimerWrapper>
    </Root>
  );
};

export default AnnounceTimer;
