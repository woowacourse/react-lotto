import { ANNOUNCE_DATE } from '../constants';

export const getAnnouncementDate = () => {
  const currentTime = new Date();
  const currentDayIndex = currentTime.getDay();
  const dayIndexGap = ANNOUNCE_DATE.DAY_INDEX - currentDayIndex;
  const announcementDate = new Date();

  announcementDate.setDate(announcementDate.getDate() + dayIndexGap);
  announcementDate.setHours(ANNOUNCE_DATE.HOUR);
  announcementDate.setMinutes(ANNOUNCE_DATE.MINUTE);
  announcementDate.setSeconds(ANNOUNCE_DATE.SECOND);

  if (announcementDate <= currentTime) {
    announcementDate.setDate(announcementDate.getDate() + 7);
  }

  return announcementDate;
};

export const toFormattedTimeString = (time) => {
  return (
    Math.floor(time / (1000 * 60 * 60 * 24)) +
    '일 ' +
    Math.floor((time / (1000 * 60 * 60)) % 24) +
    '시간 ' +
    (Math.floor(time / (1000 * 60)) % 60) +
    '분 ' +
    (Math.floor(time / 1000) % 60) +
    '초'
  );
};
