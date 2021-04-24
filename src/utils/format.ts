export const getKRMoneyString = (number: number) =>
  Number.isNaN(number) ? '' : number.toLocaleString('ko-KR');
