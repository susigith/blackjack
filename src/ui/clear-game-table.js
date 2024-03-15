export const clearGameTable = () => {
  const gameTable = document.querySelector('.game-table');

  if (gameTable) {
    gameTable.remove();
  }
};
