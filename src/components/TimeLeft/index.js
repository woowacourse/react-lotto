import React, { useState, useEffect } from 'react';
import './style.scss';

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState('--일 --시간 --분 --초');
  const [now, setNow] = useState(new Date());
  const [announceDate, setAnnounceDate] = useState(new Date('April 24, 2021 20:45:00'));
  let ticking = null;

  const tick = () => {
    if (announceDate < now) {
      setAnnounceDate(new Date(announceDate.getTime() + 7 * 1000 * 60 * 60 * 24));
    }

    let dateDifference = announceDate - now;
    const dayDifference = Math.floor(
      (announceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    dateDifference -= dayDifference * (1000 * 60 * 60 * 24);
    const hourDifference = Math.floor(dateDifference / (1000 * 60 * 60));
    dateDifference -= hourDifference * (1000 * 60 * 60);

    const minuteDifference = Math.floor(dateDifference / (1000 * 60));
    dateDifference -= minuteDifference * (1000 * 60);

    const secondDifference = Math.floor(dateDifference / 1000);

    const newTime = `⏰ ${dayDifference < 10 ? `0${dayDifference}` : dayDifference}일 ${
      hourDifference < 10 ? `0${hourDifference}` : hourDifference
    }시간 ${minuteDifference < 10 ? `0${minuteDifference}` : minuteDifference}분 ${
      secondDifference < 10 ? `0${secondDifference}` : secondDifference
    }초 ⏰`;

    setTimeLeft(newTime);
    setNow(new Date());
  };

  useEffect(() => {
    ticking = setInterval(() => {
      tick();
    }, 1000);
    return clearInterval(ticking);
  }, []);

  return (
    <>
      <div className='belt-up'></div>
      <div className='time-container'>
        <div className='time-sub-title'>
          🎁✨🎉🎟🎀🎢🎐 당첨 발표까지 🎊🎄🎈🧨🎇🧧 <span> {timeLeft} </span>
        </div>
      </div>
    </>
  );
};

export default TimeLeft;
