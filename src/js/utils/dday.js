export const extractRemainingDatesUntilDDay = (DDay) => {
  const day = Math.floor(DDay / (3600 * 24));
  const hour = Math.floor(DDay / 3600) % 24;
  const minutes = Math.floor(DDay / 60) % 60;
  const seconds = Math.floor(DDay) % 60;

  return { day, hour, minutes, seconds };
};
