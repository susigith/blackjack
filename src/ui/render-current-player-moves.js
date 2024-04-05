import { Player } from '../models';
import { requestCard, scoreCalculator } from '../usecases';
import { renderCard } from './';

/**
 *
 * @param {Player} currentPlayer
 * @param {Array<String>} deck
 */
export const renderCurrentPlayerMoves = (currentPlayer, deck) => {
  if (!currentPlayer || !deck)
    throw new Error('Parameters currentPlayer and deck are required');

  const playerScore = document.querySelector(`.${currentPlayer.id}-score`);
  let card = requestCard(deck);

  currentPlayer.score = scoreCalculator(currentPlayer, card);
  playerScore.innerText = ` - ${currentPlayer.score}`;
  renderCard(card.cardType, currentPlayer.id);
};
