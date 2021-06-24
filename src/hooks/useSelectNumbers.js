import { useState } from 'react';

import { LOTTO, MESSAGE } from '../constants';

export const useSelectNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState('');

  const handleSelectNumbers = pickedNumber => {
    const isIncluded = numbers.find(number => number === pickedNumber);

    if (!isIncluded && numbers.length === LOTTO.BUNDLE_SIZE) {
      alert(MESSAGE.EXCEEDED_LOTTO_COUNT);

      return;
    }

    const newNumbers = isIncluded
      ? numbers.filter(number => number !== pickedNumber)
      : [...numbers, pickedNumber];

    setNumbers(newNumbers);
  };

  const handleChangeBonusNumber = bonusNumber => {
    setBonusNumber(bonusNumber);
  };

  return { bonusNumber, numbers, handleSelectNumbers, handleChangeBonusNumber };
};
