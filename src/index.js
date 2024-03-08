import { renderCard } from './ui/render-card';
import { newGame } from './usecases/new-game';
import { requestCard } from './usecases/request-card';
import { stopGame } from './usecases/stop-game';

export const Blackjack = () => {
  const deck = newGame();

  const btnNuevoJuego = document.querySelector('.new-game');
  btnNuevoJuego.addEventListener('click', () => newGame());

  const btnRequestCard = document.querySelector('.request-card');
  btnRequestCard.addEventListener('click', () => {
    renderCard(requestCard(deck));
  });

  const btnStopGame = document.querySelector('.stop-game');
  btnStopGame.addEventListener('click', () => {
    stopGame();
  });
};
