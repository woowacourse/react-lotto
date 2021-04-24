import { useState, useEffect } from 'react';
import { ANNOUNCE_TIME } from '../../../constants/standard';

const getDiffTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const diff = ANNOUNCE_TIME.DAY - now.getDay();

  const nextSaturday = new Date(year, month, date + diff, ANNOUNCE_TIME.HOUR, ANNOUNCE_TIME.MINUTE);
  if (nextSaturday - now < 0) {
    nextSaturday.setDate(nextSaturday.getDate() + 7);
  }

  const leftTime = (nextSaturday - now) / (1000 * 60 * 60);
  const leftDate = Math.floor(leftTime / 24);
  const leftHour = Math.floor(leftTime % 24);
  const leftMinute = Math.floor(((leftTime % 24) - leftHour) * 60);
  const leftSecond = Math.floor((((leftTime % 24) - leftHour) * 60 - leftMinute) * 60);

  return { leftDate, leftHour, leftMinute, leftSecond };
};

const AnnouncementTime = () => {
  const [date, setDate] = useState(getDiffTime());
  const { leftDate, leftHour, leftMinute, leftSecond } = date;

  useEffect(() => {
    const timerID = setInterval(() => setDate(getDiffTime()), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="flex text-center flex-col mt-10">
      <div>🕒 다음 당첨 번호 발표까지 남은 시간 🕒</div>
      <div className="font-bold text-2xl text-red-500">{`${leftDate}일 ${leftHour}시 ${leftMinute}분 ${leftSecond}초`}</div>
    </div>
  );
};

export default AnnouncementTime;
