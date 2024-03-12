import { Card } from '../models/card';
import { Player } from '../models/player';

/**
 *
 * @param {Player} player
 * @param {Card} card
 * @returns
 */
export const scoreCalculator = (player, card) => {
  let { score } = player;

  score = card.cardValue + score;

  return score;
};
