export const scoreCalculator = (player, card) => {
  let { score } = player;

  const deckScores = {
    A: 11,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    1: 10,
    J: 10,
    Q: 10,
    K: 10,
  };

  score = deckScores[card.charAt(0)] + score;

  return score;
};
