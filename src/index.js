import { renderCurrentPlayerMoves } from './ui/render-current-player-moves';
import { renderGameTable } from './ui/render-game-table';
import { newGame } from './usecases/new-game';
import { computerGame } from './usecases/computer-game';
import { endGame } from './usecases/end-game';
import { clearGameTable } from './ui/clear-game-table';

export const Blackjack = (element) => {
  let deck;
  let arrayOfPlayers;
  let currentPlayer;
  let scoreBoard = [];

  const btnNuevoJuego = document.querySelector('.new-game');
  btnNuevoJuego.addEventListener('click', () => {
    btnRequestCard.disabled = false;
    btnStopGame.disabled = false;

    let newGameConfig = newGame(arrayOfPlayers, deck, scoreBoard);
    clearGameTable();

    deck = newGameConfig.deck;
    arrayOfPlayers = newGameConfig.arrayOfPlayers;
    scoreBoard = newGameConfig.scoreBoard;

    renderGameTable(arrayOfPlayers, element);
    currentPlayer = arrayOfPlayers.shift();
  });

  const btnRequestCard = document.querySelector('.request-card');
  btnRequestCard.disabled = true;
  btnRequestCard.addEventListener('click', () => {
    renderCurrentPlayerMoves(currentPlayer, deck);

    if (currentPlayer.score === 21) {
      setTimeout(() => {
        alert(`21, ${currentPlayer.name} Gana 🥳`);
      }, 1);
    }

    if (currentPlayer.score > 21) {
      currentPlayer = arrayOfPlayers.shift();
      setTimeout(() => {
        alert(`¡Oh no! Te has pasado 🫣 \n Turno de ${currentPlayer.name}`);
      }, 1);

      if (currentPlayer.name === 'Computadora') {
        computerGame(currentPlayer, scoreBoard, deck, arrayOfPlayers);
        endGame(scoreBoard);
        btnRequestCard.disabled = true;
        btnStopGame.disabled = true;
      }
    }
  });

  const btnStopGame = document.querySelector('.stop-game');
  btnStopGame.disabled = true;
  btnStopGame.addEventListener('click', () => {
    scoreBoard.push(currentPlayer);
    currentPlayer = arrayOfPlayers.shift();

    if (currentPlayer.name === 'Computadora') {
      computerGame(currentPlayer, scoreBoard, deck, arrayOfPlayers);
      endGame(scoreBoard);
      btnRequestCard.disabled = true;
      btnStopGame.disabled = true;
    }
  });
};
