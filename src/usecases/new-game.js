import { createDeck } from './create-deck';
import { createPlayers } from './create-players';
/**
 *
 * @returns {ObjectLike<Array, Array>} returns shuffle deck and array of players object
 */
export const newGame = () => {
  const deck = createDeck();
  let scoreBoard = [];
  const arrayOfPlayers = createPlayers();
  const gameTable = document.querySelector('.game-table');

  if (gameTable) {
    gameTable.remove();
  }

  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return { deck, arrayOfPlayers, scoreBoard };
};
