import { createDeck } from '../../src/usecases/create-deck';

describe('testing createDeck', () => {
  test('should return 52 cards deck', () => {
    expect(createDeck().length).toBe(52);
  });
});
