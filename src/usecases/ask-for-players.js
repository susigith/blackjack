/**
 *
 * @returns {Number} return total number of players
 */
export const askForPlayers = () => {
  let totalPlayers = 1;
  let attempts = 0;

  do {
    totalPlayers = Number(
      prompt(
        '¿Cuántos jugadores quieres en la mesa?  \n 💡 Introduce un numero del 1 al 3',
        1
      )
    );

    attempts++;

    if (attempts === 3) {
      totalPlayers = 1;
      break;
    }
  } while (Number.isNaN(totalPlayers) || totalPlayers < 1 || totalPlayers > 3);

  return totalPlayers;
};
