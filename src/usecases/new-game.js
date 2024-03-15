import { Player } from '../models';
import { createDeck, createPlayers } from './';

/**
 *
 * @param {Array<Player>} arrayOfPlayers
 * @param {Array<String>} deck
 * @param {Array<Player>} scoreBoard
 * @returns {ObjectLike} returns new game config object
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
