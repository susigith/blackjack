import { renderCurrentPlayerMoves } from '../ui/render-current-player-moves';

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

  const winner = scoreBoard.reduce((previous, current) =>
    current.score > previous.score && current.score <= 21 ? current : previous
  );

  setTimeout(() => {
    alert(`${winner.name} Gana 🥳`);
  }, 1);
};
