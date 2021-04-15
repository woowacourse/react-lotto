export const getRandomId = () => Math.random().toString(36).substr(2, 11);

export const shuffle = (currentArray) => {
  const array = [...currentArray];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const getIntersectionCount = (arr1, arr2) => {
  const intersection = arr1.filter((element) => arr2.includes(element));

  return intersection.length;
};

export const currencyFormat = (number) =>
  new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(number);

export const initObject = (keyList, value) => {
  let obj = {};

  keyList.forEach((key) => {
    obj = {
      ...obj,
      [key]: value,
    };
  });

  return obj;
};

export const isUniqueArray = (array) => array.length === new Set(array).size;
