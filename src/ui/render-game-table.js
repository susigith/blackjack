import { Player } from '../models';

/**
 *
 * @param {Array<Player>} arrayOfPlayers
 * @param {HTMLDivElement} element
 */
export const renderGameTable = (arrayOfPlayers, element) => {
  if (!arrayOfPlayers || !element)
    throw new Error('Parameters arrayOfPlayers and element are required');

  const gameTable = document.createElement('div');
  gameTable.classList.add('game-table');

  for (let i = 0; i < arrayOfPlayers.length; i++) {
    const playersDiv = document.createElement('div');
    const hr = document.createElement('hr');
    const cardsDeckDiv = document.createElement('div');
    const playerHeading = document.createElement('h2');
    const scoreHeading = document.createElement('h2');

    playersDiv.classList.add(`${arrayOfPlayers[i].id}`);
    cardsDeckDiv.classList.add(`${arrayOfPlayers[i].id}-cards-deck`);
    scoreHeading.classList.add(`${arrayOfPlayers[i].id}-score`);

    playerHeading.innerText = arrayOfPlayers[i].name;
    scoreHeading.innerText = ` - Puntuación ${arrayOfPlayers[i].score}`;

    playersDiv.append(playerHeading, scoreHeading, hr, cardsDeckDiv);
    gameTable.appendChild(playersDiv);
  }

  element.appendChild(gameTable);
};
