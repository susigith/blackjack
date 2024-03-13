import { Player } from '../models/player';

/**
 *
 * @param {Array<Player>} arrayOfPlayers
 * @param {HTMLDivElement} element
 */
export const renderGameTable = (arrayOfPlayers, element) => {
  const gameTable = document.createElement('div');
  gameTable.classList.add('game-table');

  for (let i = 0; i < arrayOfPlayers.length; i++) {
    const playersDiv = document.createElement('div');
    const cardsDeckDiv = document.createElement('div');
    const playerHeading = document.createElement('h2');
    const scoreHeading = document.createElement('h2');

    playersDiv.classList.add(`${arrayOfPlayers[i].id}`);
    cardsDeckDiv.classList.add('cards-deck');
    scoreHeading.classList.add(`${arrayOfPlayers[i].id}-score`);

    playerHeading.innerText = arrayOfPlayers[i].name;
    scoreHeading.innerText = ` - ${arrayOfPlayers[i].score}`;

    playersDiv.append(playerHeading, scoreHeading, cardsDeckDiv);
    gameTable.appendChild(playersDiv);
  }

  element.appendChild(gameTable);
};
