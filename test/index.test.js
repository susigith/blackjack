import { fireEvent, screen } from '@testing-library/dom';
import { Blackjack } from '../src';
import { clearGameTable } from '../src/ui/clear-game-table';
import { newGame } from '../src/usecases/new-game';
import { renderGameTable } from '../src/ui/render-game-table';
import { renderCurrentPlayerMoves } from '../src/ui/render-current-player-moves';
import { testDeck } from './fixtures/test-deck';
import { computerGame } from '../src/usecases/computer-game';
import { endGame } from '../src/usecases/end-game';
import {
  emptyTestScoreBoard,
  testArrayOfOnePlayer,
  testBlackjackArrayOfPlayers,
  testBlackjackArrayOfPlayers2,
} from './fixtures/test-players';

jest.mock('../src/ui/clear-game-table');
jest.mock('../src/usecases/new-game');
jest.mock('../src/ui/render-game-table');
jest.mock('../src/ui/render-current-player-moves');
jest.mock('../src/usecases/computer-game');
jest.mock('../src/usecases/end-game');

describe('Test Blackjack', () => {
  beforeEach(() => {
    jest.useFakeTimers(),
      jest.spyOn(global, 'setTimeout'),
      jest.spyOn(global, 'alert').mockImplementation((message) => message);
    jest.clearAllMocks(), jest.clearAllTimers();
  });

  test('should set up new game and alert Jugador 3 Gana', () => {
    const element = `<div id="app"></div>`;
    document.body.innerHTML = `
        <div class="controls">
          <button class="new-game">Nuevo Juego</button>
          <button class="request-card" disabled="">Pedir Carta</button>
          <button class="stop-game" disabled="">Detener</button>
        </div>`;

    Blackjack(element);
    const newGameConfigTest = {
      deck: testDeck,
      arrayOfPlayers: [...testBlackjackArrayOfPlayers],
      scoreBoard: emptyTestScoreBoard,
    };

    newGame.mockReturnValue(newGameConfigTest);
    let { deck, arrayOfPlayers } = newGameConfigTest;
    let currentPlayer = arrayOfPlayers[0];

    const arrayOfPlayersLength = arrayOfPlayers.length;

    const btnNuevoJuego = screen.getByRole('button', { name: /nuevo juego/i });
    fireEvent.click(btnNuevoJuego);

    jest.runOnlyPendingTimers();

    const btnPedirCarta = screen.getByRole('button', { name: /pedir carta/i });
    const btnDetener = screen.getByRole('button', { name: /detener/i });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1);
    expect(btnPedirCarta).toBeEnabled();
    expect(btnDetener).toBeEnabled();
    expect(clearGameTable).toHaveBeenCalledTimes(1);
    expect(newGame).toHaveBeenCalledTimes(1);
    expect(renderGameTable).toHaveBeenCalledWith(arrayOfPlayers, element);
    expect(arrayOfPlayers.length).toBe(arrayOfPlayersLength - 1);

    fireEvent.click(btnPedirCarta);
    expect(renderCurrentPlayerMoves).toHaveBeenCalledWith(currentPlayer, deck);
    expect(setTimeout).toHaveBeenCalledTimes(2);

    jest.runOnlyPendingTimers();

    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith('21, Jugador 3 Gana 🥳');
  });

  test('should alert if player score is goes over', () => {
    const element = `<div id="app"></div>`;
    document.body.innerHTML = `
        <div class="controls">
          <button class="new-game">Nuevo Juego</button>
          <button class="request-card" disabled="">Pedir Carta</button>
          <button class="stop-game" disabled="">Detener</button>
        </div>`;

    Blackjack(element);
    const newGameConfigTest = {
      deck: testDeck,
      arrayOfPlayers: [...testBlackjackArrayOfPlayers2],
      scoreBoard: emptyTestScoreBoard,
    };

    newGame.mockReturnValue(newGameConfigTest);
    let { deck, arrayOfPlayers, scoreBoard } = newGameConfigTest;
    let currentPlayer = arrayOfPlayers[0];

    const btnNuevoJuego = screen.getByRole('button', { name: /nuevo juego/i });

    fireEvent.click(btnNuevoJuego);

    jest.runOnlyPendingTimers();

    const btnPedirCarta = screen.getByRole('button', { name: /pedir carta/i });
    const btnDetener = screen.getByRole('button', { name: /detener/i });
    let currentPlayerComputer = arrayOfPlayers[0];

    fireEvent.click(btnPedirCarta);

    expect(newGame).toHaveBeenCalledTimes(1);
    expect(renderCurrentPlayerMoves).toHaveBeenCalledWith(currentPlayer, deck);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1);
    expect(arrayOfPlayers.length).toBe(0);
    expect(computerGame).toHaveBeenCalledWith(
      currentPlayerComputer,
      scoreBoard,
      deck,
      arrayOfPlayers
    );
    expect(endGame).toHaveBeenCalledWith(scoreBoard);
    expect(btnPedirCarta).toBeDisabled();
    expect(btnDetener).toBeDisabled();

    jest.runOnlyPendingTimers();
    expect(alert).toHaveBeenCalledWith(
      `¡Oh no! Te has pasado 🫣 \n Turno de Computadora`
    );
  });

  test('should end game correctly', () => {
    const element = `<div id="app"></div>`;
    document.body.innerHTML = `
        <div class="controls">
          <button class="new-game">Nuevo Juego</button>
          <button class="request-card" disabled="">Pedir Carta</button>
          <button class="stop-game" disabled="">Detener</button>
        </div>`;

    Blackjack(element);
    const newGameConfigTest = {
      deck: testDeck,
      arrayOfPlayers: testArrayOfOnePlayer,
      scoreBoard: emptyTestScoreBoard,
    };

    newGame.mockReturnValue(newGameConfigTest);
    let { deck, arrayOfPlayers, scoreBoard } = newGameConfigTest;
    let currentPlayer = arrayOfPlayers[0];

    const btnNuevoJuego = screen.getByRole('button', { name: /nuevo juego/i });

    fireEvent.click(btnNuevoJuego);

    jest.runOnlyPendingTimers();

    const btnPedirCarta = screen.getByRole('button', { name: /pedir carta/i });
    const btnDetener = screen.getByRole('button', { name: /detener/i });

    let currentPlayerComputer = arrayOfPlayers[0];

    fireEvent.click(btnPedirCarta);

    expect(renderCurrentPlayerMoves).toHaveBeenCalledWith(currentPlayer, deck);

    jest.runOnlyPendingTimers();

    expect(setTimeout).toHaveBeenCalledTimes(1);

    fireEvent.click(btnDetener);

    expect(scoreBoard).toContainEqual(currentPlayer);
    expect(computerGame).toHaveBeenCalledWith(
      currentPlayerComputer,
      scoreBoard,
      deck,
      arrayOfPlayers
    );
    expect(endGame).toHaveBeenCalledWith(scoreBoard);
    expect(btnPedirCarta).toBeDisabled();
    expect(btnDetener).toBeDisabled();
  });
});
