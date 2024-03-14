import { requestCard } from '../usecases/request-card';
import { scoreCalculator } from '../usecases/score-calculator';
import { renderCard } from './render-card';

export const renderCurrentPlayerMoves = (currentPlayer, deck) => {
  const playerScore = document.querySelector(`.${currentPlayer.id}-score`);
  let card = requestCard(deck);

  currentPlayer.score = scoreCalculator(currentPlayer, card);
  playerScore.innerText = ` - ${currentPlayer.score}`;
  renderCard(card.cardType, currentPlayer.id);
};
