export const renderGameTable = (totalPlayers, element) => {
  const gameTable = document.createElement('div');
  gameTable.classList.add('game-table');

  for (let i = 0; i < totalPlayers.length; i++) {
    const playersDiv = document.createElement('div');
    const playerHeading = document.createElement('h2');
    const scoreHeading = document.createElement('h2');

    playersDiv.classList.add(`${totalPlayers[i].id}`);
    playerHeading.innerText = totalPlayers[i].name;

    playersDiv.append(playerHeading, scoreHeading);
    gameTable.appendChild(playersDiv);
  }

  element.appendChild(gameTable);
};
