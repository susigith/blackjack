import { requestCard } from '../../src/usecases/request-card';
import { testDeck } from '../fixtures/test-deck';

describe('testing requestCard', () => {
  test('should return first card of in deck', () => {
    const firstCard = testDeck[0];
    expect(requestCard(testDeck)).toEqual(firstCard);
  });
  test('should throw error if deck is empty', () => {
    const emptyDeckError = () => requestCard([]);
    expect(emptyDeckError).toThrow();
  });
  test('should throw error if not deck parameter is sent', () => {
    const emptyDeckError = () => requestCard();
    expect(emptyDeckError).toThrow();
  });
});
