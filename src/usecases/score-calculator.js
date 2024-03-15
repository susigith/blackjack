import { Card, Player } from '../models';

/**
 *
 * @param {Player} player
 * @param {Card} card
 * @returns {Number} returns player score sum
 */
export const scoreCalculator = (player, card) => {
  let { score } = player;

  score = card.cardValue + score;

  return score;
};
