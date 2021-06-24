import React, { useEffect, useRef, useState } from 'react';
import { TIME } from '../../constants/number';
import './style.scss';

const AnnounceDateIndicator = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const announceDate = useRef(); // 리액트와 관련 없는 단순 날짜.
  const ticking = useRef();

  const tick = () => {
    const now = new Date();

    if (announceDate.current < now) {
      announceDate.current = new Date(announceDate.current.getTime() + TIME.WEEK);
      return;
    }

    let dateDifference = announceDate.current.getTime() - now.getTime();
    const dayDifference = Math.floor((announceDate.current.getTime() - now.getTime()) / TIME.DAY);
    dateDifference -= dayDifference * TIME.DAY;

    const hourDifference = Math.floor(dateDifference / TIME.HOUR);
    dateDifference -= hourDifference * TIME.HOUR;

    const minuteDifference = Math.floor(dateDifference / TIME.MINUTE);
    dateDifference -= minuteDifference * TIME.MINUTE;

    const secondDifference = Math.floor(dateDifference / TIME.SECOND);

    const newTime = `⏰ ${dayDifference < 10 ? `0${dayDifference}` : dayDifference}일 ${
      hourDifference < 10 ? `0${hourDifference}` : hourDifference
    }시간 ${minuteDifference < 10 ? `0${minuteDifference}` : minuteDifference}분 ${
      secondDifference < 10 ? `0${secondDifference}` : secondDifference
    }초 ⏰`;

    setTimeLeft(newTime);
  };

  useEffect(() => {
    announceDate.current = new Date(...[2021, 5, 12, 20, 45, 0]);
    ticking.current = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(ticking.current);
    };
  }, []);

  return (
    <>
      <div className='belt-up'></div>
      <div className='time-container'>
        <div className='time-sub-title'>🎁✨🎉🎟🎀🎢🎐 당첨 발표까지 🎊🎄🎈🧨🎇🧧 {timeLeft}</div>
      </div>
    </>
  );
};

export default AnnounceDateIndicator;
