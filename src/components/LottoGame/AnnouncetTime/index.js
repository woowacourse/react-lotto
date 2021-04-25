import React, { useState, useEffect } from 'react';
import { getLeftTimeBetweenAnnounceTimeAndCurrentTime } from '../../../services/lottoService';

const AnnouncementTime = () => {
  const [leftTime, setLeftTime] = useState(getLeftTimeBetweenAnnounceTimeAndCurrentTime());

  useEffect(() => {
    const timerID = setInterval(() => {
      setLeftTime(getLeftTimeBetweenAnnounceTimeAndCurrentTime());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const { leftDate, leftHour, leftMinute, leftSecond } = leftTime;

  return (
    <div className="flex text-center flex-col mt-10">
      <div>🕒 다음 당첨 번호 발표까지 남은 시간 🕒</div>
      <div className="font-bold text-2xl text-red-500">{`${leftDate}일 ${leftHour}시 ${leftMinute}분 ${leftSecond}초`}</div>
    </div>
  );
};

export default AnnouncementTime;
