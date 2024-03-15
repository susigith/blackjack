import { Player } from '../models';
import { requestCard, scoreCalculator } from '../usecases';
import { renderCard } from './';

/**
 *
 * @param {Player} currentPlayer
 * @param {Array<String>} deck
 */
export const renderCurrentPlayerMoves = (currentPlayer, deck) => {
  const playerScore = document.querySelector(`.${currentPlayer.id}-score`);
  let card = requestCard(deck);

  currentPlayer.score = scoreCalculator(currentPlayer, card);
  playerScore.innerText = ` - ${currentPlayer.score}`;
  renderCard(card.cardType, currentPlayer.id);
};
