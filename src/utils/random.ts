export const getRandomNumber = (min: number, max: number) => {
  if (Number.isNaN(min) && Number.isNaN(max)) return;

  return Math.floor(Math.random() * max + min);
};
