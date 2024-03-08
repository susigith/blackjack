import { createDeck } from './create-deck';
import { createPlayers } from './create-players';
/**
 *
 * @returns {ObjectLike<Array>} returns shuffle deck an players object
 */
export const newGame = () => {
  const deck = createDeck();
  const arrayOfPlayers = createPlayers();

  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return { deck, arrayOfPlayers };
};
