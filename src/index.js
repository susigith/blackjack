import { renderCard } from './ui/render-card';
import { newGame } from './usecases/new-game';
import { requestCard } from './usecases/request-card';
import { stopGame } from './usecases/stop-game';

export const Blackjack = () => {
  let deck = [];

  const btnNuevoJuego = document.querySelector('.new-game');
  btnNuevoJuego.addEventListener('click', () => {
    deck = newGame();
  });

  const btnRequestCard = document.querySelector('.request-card');
  btnRequestCard.addEventListener('click', () => renderCard(requestCard(deck)));

  const btnStopGame = document.querySelector('.stop-game');
  btnStopGame.addEventListener('click', () => stopGame());
};
