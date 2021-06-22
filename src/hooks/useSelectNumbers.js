import { useState } from 'react';

import { LOTTO, MESSAGE } from '../constants';

export const useSelectNumbers = () => {
  const [numbers, setNumbers] = useState([]);

  const handleSelectNumbers = pickedNumber => {
    const prevNumbers = numbers;

    const newNumbers = numbers.find(number => number === pickedNumber)
      ? prevNumbers.filter(number => number !== pickedNumber)
      : [...prevNumbers, pickedNumber];

    if (newNumbers.length === LOTTO.BUNDLE_SIZE + 1) {
      alert(MESSAGE.EXCEEDED_LOTTO_COUNT);
      return;
    }

    setNumbers(newNumbers);
  };

  return [numbers, handleSelectNumbers];
};
