import { useEffect, useRef, useState } from 'react';
import { toFormattedTimeString, getAnnouncementDate } from '../../utils/lottoUtils';

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(savedCallback.current, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default function Component({ announcementDate, setAnnouncementDate }) {
  const [remainTime, setRemainTime] = useState(0);

  const tick = () => {
    const currentTime = new Date();
    const gap = announcementDate - currentTime;

    if (gap < 1000) {
      setAnnouncementDate(getAnnouncementDate());
    }

    setRemainTime(gap);
  };

  useInterval(tick, 1000);

  return (
    <div className="mt-5 text-center">
      <h3 className="m-1">🎉 당첨 번호 발표 시간 🎉</h3>
      <p className="m-1">{announcementDate.toLocaleString('ko-KR')}</p>
      <p className="mt-1">남은 시간 : {toFormattedTimeString(remainTime)}</p>
    </div>
  );
}
