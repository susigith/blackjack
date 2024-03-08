/**
 *
 * @param {Array<String>} deck
 * @returns {Card<String>} returns the first card in deck
 */
export const requestCard = (deck = []) => {
  if (deck.length === 0) throw new Error('No quedan cartas en el mazo');

  return deck.shift();
};
