export const getKRMoneyString = (number: number) => {
  if (Number.isNaN(number)) return;

  return number.toLocaleString('ko-KR');
};
