import { useState } from 'react';

import { LOTTO, MESSAGE } from '../constants';

export const useSelectNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState('');

  const handleSelectNumbers = pickedNumber =>
    setNumbers(prevNumbers => {
      const newNumbers = prevNumbers.find(number => number === pickedNumber)
        ? prevNumbers.filter(number => number !== pickedNumber)
        : [...prevNumbers, pickedNumber];

      if (newNumbers.length === LOTTO.BUNDLE_SIZE + 1) {
        alert(MESSAGE.EXCEEDED_LOTTO_COUNT);
        return prevNumbers;
      } else {
        return newNumbers;
      }
    });

  const handleChangeBonusNumber = bonusNumber => {
    setBonusNumber(bonusNumber);
  };

  return { bonusNumber, numbers, handleSelectNumbers, handleChangeBonusNumber };
};
