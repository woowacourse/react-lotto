import Lotto from '../Lotto';

const validatePriceUnit = (price) => {
  if (price % Lotto.LOTTO_PRICE_UNIT !== 0) throw Error('1,000원 단위로 입력해주세요 🐱‍');
};

const validateNumbers = (mainNumbers, bonusNumber) => {
  const isDuplicated = Lotto.NUMBERS_LENGTH >= new Set([...mainNumbers, bonusNumber]).size;

  if (isDuplicated) throw Error('중복된 당첨번호가 존재합니다 🤢');
};

export { validatePriceUnit, validateNumbers };
