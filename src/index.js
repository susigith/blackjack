import { renderCard } from './ui/render-card';
import { newGame } from './usecases/new-game';
import { requestCard } from './usecases/request-card';
import { stopGame } from './usecases/stop-game';

export const Blackjack = () => {
  let newGameConfig;

  const btnNuevoJuego = document.querySelector('.new-game');
  btnNuevoJuego.addEventListener('click', () => {
    newGameConfig = newGame();
  });

  const btnRequestCard = document.querySelector('.request-card');
  btnRequestCard.addEventListener('click', () => {
    const { deck, arrayOfPlayers } = newGameConfig;
    const currentPlayer = arrayOfPlayers.shift();

    if (currentPlayer) {
      renderCard(requestCard(deck), currentPlayer);
    }
  });

  const btnStopGame = document.querySelector('.stop-game');
  btnStopGame.addEventListener('click', () => stopGame());
};
