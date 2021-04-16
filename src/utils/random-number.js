function getRandomNumber(min, max) {
  const includedMax = max + 1;
  return Math.floor(Math.random() * (includedMax - min) + 1);
}

export { getRandomNumber };
