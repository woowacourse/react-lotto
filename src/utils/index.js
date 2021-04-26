export const isSameArray = (array1, array2) => {
  return array1.length === new Set([...array1, ...array2]).size;
};

export const isDuplicatedArray = (array) => {
  return array.length !== new Set(array).size;
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomNumberArray = (min, max, length) => {
  const numbers = new Set();

  while (numbers.size < length) {
    const number = getRandomNumber(min, max);

    numbers.add(number);
  }

  return Array.from(numbers);
};

export const keyGenerator = (function () {
  let key = 0;

  const increaseKey = function () {
    key = key + 1;
  };
  return function getKey() {
    increaseKey();
    return key;
  };
})();
