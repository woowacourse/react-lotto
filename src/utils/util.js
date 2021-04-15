const getRandomNumber = (min, max) => {
  return Math.round((1 - Math.random()) * (max - min)) + min;
};

export const getRandomNumbers = ({ min, max, size }) => {
  const numberSet = new Set();

  while (numberSet.size < size) {
    numberSet.add(getRandomNumber(min, max));
  }

  return [...numberSet];
};

function* getId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

export const idMaker = getId();
