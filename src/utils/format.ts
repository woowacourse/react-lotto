export const getKRMoneyString = (number: number) => {
  if (Number.isNaN(number)) throw new Error('NaN');

  return number.toLocaleString('ko-KR');
};
