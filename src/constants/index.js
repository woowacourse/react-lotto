const RANK_CONVERTER = {
  6: '1st',
  5.5: '2nd',
  5: '3rd',
  4: '4th',
  3: '5th',
};

const RANK_TABLE = {
  '5th': {
    prize: 5e3,
    matching: '3개',
  },
  '4th': {
    prize: 5e4,
    matching: '4개',
  },
  '3rd': {
    prize: 15e5,
    matching: '5개',
  },
  '2nd': {
    prize: 3e7,
    matching: '5개 + 보너스볼',
  },

  '1st': {
    prize: 2e9,
    matching: '6개',
  },
};

export { RANK_CONVERTER, RANK_TABLE };
