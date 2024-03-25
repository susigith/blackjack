import { Player } from '../../src/models';

export const currentPlayerComputer = new Player({
  id: 'computer',
  name: 'Computadora',
  score: 0,
});

const testPlayer1 = new Player({
  id: 'player1',
  name: 'Jugador1',
  score: '10',
});
const testPlayer2 = new Player({
  id: 'player2',
  name: 'Jugador2',
  score: '12',
});

export const testArrayOfPlayers = [currentPlayerComputer];

export const testScoreBoard = [testPlayer1, testPlayer2];
