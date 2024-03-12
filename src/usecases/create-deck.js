import { Card } from '../models/card';

/**
 *
 * @returns {Array<String>} create cards deck
 */
export const createDeck = () => {
  const types = ['H', 'D', 'C', 'S'];
  const cardValues = {
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

  const deck = types.flatMap((type) => {
    let card = [];

    for (const key in cardValues) {
      card.push(new Card({ cardType: key + type, cardValue: cardValues[key] }));
    }

    return card;
  });

  return deck;
};
