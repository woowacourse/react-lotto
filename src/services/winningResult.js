export const getMatchedCounts = (lottos, winningNumbers) => {
  return lottos.map(lotto => {
    const isMatchedBonus = lotto.includes(winningNumbers.bonusNumber);
    let count = lotto.filter(number => winningNumbers.numbers.includes(number))
      .length;

    if (count === 5 && isMatchedBonus) {
      count += 0.5;
    }

    return count;
  });
};

export const getRanks = counts => {
  return counts.map(getRank);
};

export const getTotalProfit = counts => {
  const totalProfit = counts
    .filter(count => count !== 0)
    .reduce((sum, count) => {
      sum += getProfit(getRank(count));
      return sum;
    }, 0);

  const cost = counts.length * 1000;
  return ((totalProfit - cost) / cost) * 100;
};

const getRank = count => {
  return (
    {
      6: 1,
      5.5: 2,
      5: 3,
      4: 4,
      3: 5,
    }[count] || 0
  );
};

const getProfit = rank => {
  return (
    {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    }[rank] || 0
  );
};

export const getLottoProfitResult = ranks => {
  const table = {
    5: { matchingCount: '3개', reward: '5,000', wins: 0 },
    4: { matchingCount: '4개', reward: '50,000', wins: 0 },
    3: { matchingCount: '5개', reward: '1,500,000', wins: 0 },
    2: { matchingCount: '5개 + 보너스볼', reward: '30,000,000', wins: 0 },
    1: { matchingCount: '6개', reward: '2,000,000,000', wins: 0 },
  };

  ranks.forEach(rank => {
    table[rank] && table[rank].wins++;
  });

  return table;
};
