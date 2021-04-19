import { LOTTERY_TIME } from "../../@shared/constants/lotto";

// eslint-disable-next-line import/prefer-default-export
export const getNextSaturday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const diff = Math.abs(6 - now.getDay());
  const nextSaturday = new Date(
    year,
    month,
    date + diff,
    LOTTERY_TIME.HOUR,
    LOTTERY_TIME.MINUTES
  );

  return nextSaturday;
};
