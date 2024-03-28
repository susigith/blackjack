import { Card } from '../../src/models';

export const testDeck = [
  {
    cardType: 'KS',
    cardValue: 10,
  },
  {
    cardType: '4H',
    cardValue: 4,
  },
  {
    cardType: '3C',
    cardValue: 3,
  },
  {
    cardType: '2D',
    cardValue: 2,
  },
];

export const testCard = new Card({
  cardType: 'AS',
  cardValue: 11,
});
