import React, { useEffect, useState } from 'react';
import { Root, TimerWrapper, Title, TimeArea } from './style';

export default function AnnounceTimer() {
  const [currentTime, setCurrentTime] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    const timer = setTimeout(() => timePass(), 1000);
    const { minutes, seconds } = currentTime;

    if (minutes === 0 && seconds === 0) clearTimeout(timer);

    return () => clearInterval(timer);
  }, [currentTime]);

  const timePass = () => {
    const { minutes, seconds } = currentTime;
    const nextMinutes = seconds > 0 ? minutes : minutes - 1;
    const nextSeconds = seconds > 0 ? seconds - 1 : 59;

    setCurrentTime({ minutes: nextMinutes, seconds: nextSeconds });
  };

  const timeDisplay =
    String(currentTime.minutes).padStart(2, '0') + ': ' + String(currentTime.seconds).padStart(2, '0');

  return (
    <Root>
      <TimerWrapper>
        <Title>🎉 당첨 발표까지 남은 시간 🥂</Title>
        <TimeArea>{timeDisplay}</TimeArea>
      </TimerWrapper>
    </Root>
  );
}
