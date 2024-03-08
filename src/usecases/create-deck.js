/**
 *
 * @returns {Array<String>} create cards deck
 */
export const createDeck = () => {
  const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const types = ['H', 'D', 'C', 'S'];

  const deck = types.flatMap((currentValue) =>
    cards.map((card) => card + currentValue)
  );

  return deck;
};
