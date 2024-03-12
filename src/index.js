import { renderCard } from './ui/render-card';
import { newGame } from './usecases/new-game';
import { requestCard } from './usecases/request-card';
import { scoreCalculator } from './usecases/score-calculator';
import { stopGame } from './usecases/stop-game';

export const Blackjack = () => {
  let deck;
  let arrayOfPlayers;
  let currentPlayer;

  const btnNuevoJuego = document.querySelector('.new-game');
  btnNuevoJuego.addEventListener('click', () => {
    let newGameConfig = newGame();

    deck = newGameConfig.deck;
    arrayOfPlayers = newGameConfig.arrayOfPlayers;

    currentPlayer = arrayOfPlayers.shift();
  });

  const btnRequestCard = document.querySelector('.request-card');
  btnRequestCard.addEventListener('click', () => {
    let card = requestCard(deck);
    renderCard(card, currentPlayer.id);
    currentPlayer.score = scoreCalculator(currentPlayer, card);
    console.log(currentPlayer);
  });

  const btnStopGame = document.querySelector('.stop-game');
  btnStopGame.addEventListener('click', () => {
    stopGame(currentPlayer);
    currentPlayer = arrayOfPlayers.shift();
    console.log(currentPlayer);
  });
};
