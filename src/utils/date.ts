export const getRemainedTime = () => {
  const ANNOUNCEMENT_HOURS = 20;
  const ANNOUNCEMENT_MINUTES = 45;
  const SATURDAY = 6;
  const announcementDate = new Date();

  announcementDate.setDate(
    announcementDate.getDate() + Math.abs(SATURDAY - announcementDate.getDay())
  );
  announcementDate.setHours(ANNOUNCEMENT_HOURS);
  announcementDate.setMinutes(ANNOUNCEMENT_MINUTES);
  announcementDate.setSeconds(0);

  return announcementDate.getTime() - Date.now();
};

export const getDate = (time: number) => Math.floor(time / (1000 * 60 * 60 * 24));
export const getHours = (time: number) =>
  Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
export const getMinutes = (time: number) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
export const getSeconds = (time: number) => Math.floor((time % (1000 * 60)) / 1000);
