export const getRandomNumber = (min, max) => {
  return Math.round((1 - Math.random()) * (max - min)) + min;
};

function* getId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

export const idMaker = getId();
