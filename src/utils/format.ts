export const getKRMoneyString = (number: number) => {
  if (Number.isNaN(number)) throw new Error('invalid parameter: NaN');

  return number.toLocaleString('ko-KR');
};
