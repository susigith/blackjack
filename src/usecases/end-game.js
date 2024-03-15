/**
 *
 * @param {Array<Player>} scoreBoard
 */
export const endGame = (scoreBoard) => {
  const winner = scoreBoard.reduce((previous, current) =>
    current.score > previous.score && current.score <= 21 ? current : previous
  );

  setTimeout(() => {
    alert(`${winner.name} Gana 🥳`);
  }, 1000);
};
