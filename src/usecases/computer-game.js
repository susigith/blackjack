import { Player } from '../models';
import { renderCurrentPlayerMoves } from '../ui';

/**
 *
 * @param {Player} currentPlayer
 * @param {Array<Player>} scoreBoard
 * @param {Array<String>} deck
 * @param {Array<Player>} arrayOfPlayers
 */
export const computerGame = (
  currentPlayer,
  scoreBoard,
  deck,
  arrayOfPlayers
) => {
  const maxScore =
    scoreBoard.length === 0
      ? 0
      : scoreBoard.reduce((previous, current) =>
          previous.score > current.score ? previous : current
        ).score;

  while (currentPlayer.score <= maxScore) {
    renderCurrentPlayerMoves(currentPlayer, deck);
  }

  scoreBoard.push(currentPlayer);
  currentPlayer = arrayOfPlayers.shift();
};
