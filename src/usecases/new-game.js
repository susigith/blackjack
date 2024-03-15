import { createDeck } from './create-deck';
import { createPlayers } from './create-players';
/**
 *
 * @returns {ObjectLike<Array, Array>} returns shuffle deck and array of players object
 */
export const newGame = (arrayOfPlayers, deck, scoreBoard) => {
  arrayOfPlayers = createPlayers();
  deck = createDeck();
  scoreBoard = [];

  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return { deck, arrayOfPlayers, scoreBoard };
};
