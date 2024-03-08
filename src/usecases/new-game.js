import { askForPlayers } from './ask-for-players';
import { createDeck } from './create-deck';
/**
 *
 * @returns {ObjectLike<Array>} returns shuffle deck an players object
 */
export const newGame = () => {
  const deck = createDeck();
  const totalPlayers = askForPlayers();
  const arrayOfPlayers = [];

  for (let i = 0; i <= totalPlayers; i++) {
    i === totalPlayers
      ? (arrayOfPlayers[i] = `computer`)
      : (arrayOfPlayers[i] = `player${[i + 1]}`);
  }

  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return { deck, arrayOfPlayers };
};
