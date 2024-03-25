import { renderCurrentPlayerMoves } from '../../src/ui/render-current-player-moves';
import { computerGame } from '../../src/usecases';
import { testDeck } from '../fixtures/test-deck';
import {
  currentPlayerComputer,
  testArrayOfPlayers,
  testScoreBoard,
} from '../fixtures/test-players';

jest.mock('../../src/ui/render-current-player-moves', () => ({
  renderCurrentPlayerMoves: jest.fn((currentPlayerComputer) => {
    currentPlayerComputer.score = 21;
  }),
}));

describe('Testing computerGame', () => {
  test('should push currentPlayerComputer into scoreBoard and shift from testArrayOfPlayers', () => {
    computerGame(
      currentPlayerComputer,
      testScoreBoard,
      testDeck,
      testArrayOfPlayers
    );

    expect(testScoreBoard.includes(currentPlayerComputer)).toBeTruthy();
    expect(testArrayOfPlayers.length).toBe(0);
  });
});
