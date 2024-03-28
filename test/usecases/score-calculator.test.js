import { scoreCalculator } from '../../src/usecases/score-calculator';
import { testPlayer1 } from '../fixtures/test-players';
import { testCard } from '../fixtures/test-deck';

describe('Test scoreCalculator', () => {
  test('should add up the current player score correctly and return it', () => {
    const score = scoreCalculator(testPlayer1, testCard);

    expect(score).toBe(21);
    expect(typeof score).toBe('number');
  });
});
