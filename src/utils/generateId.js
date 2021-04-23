const generateId = (() => {
  const getRandomBigNumber = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
  const PAD_START_LENGTH = Number.MAX_SAFE_INTEGER.toString().length;
  const addPadStart = (number) => number.toString().padStart(PAD_START_LENGTH, '0');
  let index = 0;

  return () => {
    const bigNumber = getRandomBigNumber();
    index = index + 1;

    return `${addPadStart(bigNumber)}-${addPadStart(index)}`;
  };
})();

export default generateId;
