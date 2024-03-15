export const clearGameTable = (scoreBoard) => {
  // Deshabilitar botones
  //Limpiar tablero

  const gameTable = document.querySelector('.game-table');

  if (gameTable) {
    gameTable.remove();
  }
};
