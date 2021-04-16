import { RANKINGS } from "./prizeTable";

export const LOTTO_PRICE = 1000;
export const LOTTO_RANGE = { FROM: 1, TO: 45 };
export const LOTTO_LENGTH = 6;

export const INITIAL_RESULT = {
  rankCount: {
    [RANKINGS.RANKING1]: 0,
    [RANKINGS.RANKING2]: 0,
    [RANKINGS.RANKING3]: 0,
    [RANKINGS.RANKING4]: 0,
    [RANKINGS.RANKING5]: 0,
    [RANKINGS.NO_PRIZE]: 0,
  },
  earningRate: 0,
};
