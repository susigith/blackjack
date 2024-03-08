/**
 *
 * @returns {Number} return total number of players
 */
export const askForPlayers = () => {
  let totalPlayers = 1;

  do {
    totalPlayers = prompt(
      '¿Cuántos jugadores quieres en la mesa?  \n 💡 Introduce un numero del 1 al 4',
      1
    );
  } while (
    typeof totalPlayers === 'number' ||
    totalPlayers < 1 ||
    totalPlayers > 4
  );

  return parseInt(totalPlayers);
};
