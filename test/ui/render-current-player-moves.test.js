import { screen } from '@testing-library/dom';
import { renderCurrentPlayerMoves } from '../../src/ui';
import { renderCard } from '../../src/ui/render-card';
import { requestCard } from '../../src/usecases/request-card';
import { scoreCalculator } from '../../src/usecases/score-calculator';
import { testCard, testDeck } from '../fixtures/test-deck';
import { testPlayer1 } from '../fixtures/test-players';

jest.mock('../../src/usecases/request-card');
jest.mock('../../src/usecases/score-calculator');
jest.mock('../../src/ui/render-card');

describe('Test renderCurrentPlayerMoves', () => {
  test('should reder the the card and updated score correctly', () => {
    const playerScore = document.createElement('h2');
    playerScore.classList.add(`${testPlayer1.id}-score`);
    playerScore.innerText = testPlayer1.score;
    document.body.appendChild(playerScore);

    requestCard.mockReturnValue(testCard);
    scoreCalculator.mockReturnValue(21);

    renderCurrentPlayerMoves(testPlayer1, testDeck);

    expect(requestCard).toHaveBeenCalledWith(testDeck);
    expect(scoreCalculator).toHaveBeenCalledWith(testPlayer1, {});
    expect(renderCard).toHaveBeenCalledWith(testCard.cardType, testPlayer1.id);

    expect(testPlayer1.score).toBe(21);
    expect(playerScore.innerText).toBe(' - Puntuación 21');
  });

  test('should throw an Error if the parameters are not sent', () => {
    expect(() => renderCurrentPlayerMoves()).toThrow(
      'Parameters currentPlayer and deck are required'
    );
  });
});
