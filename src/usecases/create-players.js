import { Player } from '../models/player';
import { askForPlayers } from './ask-for-players';
/**
 *
 * @returns {Array<String>} return array of players
 */
export const createPlayers = () => {
  const totalPlayers = askForPlayers();
  let arrayOfPlayers = [];

  for (let i = 0; i < totalPlayers; i++) {
    arrayOfPlayers.push(
      new Player({ id: `player${i + 1}`, name: `Jugador ${i + 1}`, score: 0 })
    );
  }

  arrayOfPlayers.push(
    new Player({ id: 'computer', name: 'Computadora', score: 0 })
  );

  return arrayOfPlayers;
};
