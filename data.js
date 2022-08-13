module.exports = () => {
  const data = {
    portfolio: [
      {
        id: 1,
        name: 'dgsix',
        name_display: 'DFA Global Allocation 60/40 Portfolio',
        portfolioRatio: {
          stocks: 0.6,
          bonds: 0.4,
        },
        returns: [],
        risk: 'n/a',
      },
      {
        id: 2,
        name: 'bacpx',
        name_display: 'BlackRock 20/80 Target Allocation Fund',
        portfolioRatio: {
          stocks: 0.2,
          bonds: 0.8,
        },
        returns: [],
        risk: 'n/a',
      },
      {
        id: 3,
        name: 'stashaway',
        name_display: 'StashAway',
        portfolioRatio: {
          stocks: 'n/a',
          bonds: 'n/a',
        },
        returns: [],
        risk: 0.14,
      },
    ],
  };

  data.portfolio.forEach((item) => {
    for (let i = 0; i < 12; i++) {
      const randomRate = +Math.random().toFixed(2);
      item.returns.push({
        rate: randomRate > 0.5 ? randomRate / 2 : randomRate,
        date: `2022-${(i + 1).toString().split('').length > 1 ? i + 1 : `0${i + 1}`}-13T14:11:32.767Z`,
      });
    }
  });

  return data;
};
