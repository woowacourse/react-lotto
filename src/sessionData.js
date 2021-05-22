import { SESSION } from './constants';

export const getExistMoneyInput = () => sessionStorage.getItem(SESSION.KEY.MONEY_INPUT);

export const getExistNewLottoList = () =>
  JSON.parse(sessionStorage.getItem(SESSION.KEY.NEW_LOTTO_LIST));

export const getExistWinningNumber = () =>
  JSON.parse(sessionStorage.getItem(SESSION.KEY.WINNING_NUMBER));

export const getExistBonusNumber = () => sessionStorage.getItem(SESSION.KEY.BONUS_NUMBER);
