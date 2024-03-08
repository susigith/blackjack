import { askForPlayers } from './ask-for-players';
/**
 *
 * @returns {Array<String>} return array of players
 */
export const createPlayers = () => {
  const totalPlayers = askForPlayers();
  const arrayOfPlayers = [];

  for (let i = 0; i <= totalPlayers; i++) {
    i === totalPlayers
      ? (arrayOfPlayers[i] = `computer`)
      : (arrayOfPlayers[i] = `player${[i + 1]}`);
  }

  return arrayOfPlayers;
};
