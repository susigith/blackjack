import { Card } from '../../src/models/card';

const mockGetCardType = jest.spyOn(Card.prototype, 'cardType', 'get');
const mockGetCardValue = jest.spyOn(Card.prototype, 'cardValue', 'get');

describe('Test Card class', () => {
  test('should call Card constructor and getters', () => {
    const card = new Card({ cardType: '2H', cardValue: 2 });
    const { cardType, cardValue } = card;

    expect(cardType).toBe('2H');
    expect(cardValue).toBe(2);
    expect(mockGetCardType).toHaveBeenCalledTimes(1);
    expect(mockGetCardValue).toHaveBeenCalledTimes(1);
  });
});
