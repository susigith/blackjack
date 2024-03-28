import { newGame } from '../../src/usecases/new-game';
import {
  emptyTestArrayOfPlayers,
  emptyTestScoreBoard,
  testArrayOfOnePlayer,
} from '../fixtures/test-players';
import { testDeck } from '../fixtures/test-deck';
import { createPlayers } from '../../src/usecases/create-players';
import { createDeck } from '../../src/usecases/create-deck';

jest.mock('../../src/usecases/create-players');
jest.mock('../../src/usecases/create-deck');

describe('Test newGame', () => {
  test('should return new game config object correctly and shuffled deck of cards', () => {
    createPlayers.mockReturnValue(testArrayOfOnePlayer);
    createDeck.mockReturnValue(testDeck);

    const testDeckInitialValue = JSON.stringify(testDeck);

    const newGameConfig = newGame(
      testDeck,
      emptyTestArrayOfPlayers,
      emptyTestScoreBoard
    );

    const { deck } = newGameConfig;

    expect(newGameConfig).toEqual({
      arrayOfPlayers: expect.any(Array),
      deck: expect.any(Array),
      scoreBoard: [],
    });
    expect(JSON.stringify(deck)).not.toMatch(testDeckInitialValue);
  });
});
