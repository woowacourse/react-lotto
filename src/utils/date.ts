export const getRemainedTime = () => {
  const nowDate = new Date();
  const announcementDate = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate(),
    20,
    45
  );
  announcementDate.setDate(nowDate.getDate() + Math.abs(6 - nowDate.getDay()));

  return announcementDate.getTime() - nowDate.getTime();
};
