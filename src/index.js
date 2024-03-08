import { renderCard } from './ui/render-card';
import { newGame } from './usecases/new-game';
import { requestCard } from './usecases/request-card';
import { stopGame } from './usecases/stop-game';

export const Blackjack = () => {
  let newGameConfig;
  let deck;
  let arrayOfPlayers;
  let currentPlayer;

  const btnNuevoJuego = document.querySelector('.new-game');
  btnNuevoJuego.addEventListener('click', () => {
    newGameConfig = newGame();
    deck = newGameConfig.deck;
    arrayOfPlayers = newGameConfig.arrayOfPlayers;
    currentPlayer = arrayOfPlayers.shift();
  });

  const btnRequestCard = document.querySelector('.request-card');
  btnRequestCard.addEventListener('click', () => {
    renderCard(requestCard(deck), currentPlayer);
  });

  const btnStopGame = document.querySelector('.stop-game');
  btnStopGame.addEventListener('click', () => {
    stopGame();
    console.log(deck, currentPlayer);
    currentPlayer = arrayOfPlayers.shift();
  });
};
