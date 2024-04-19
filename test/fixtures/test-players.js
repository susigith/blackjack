import { Player } from '../../src/models';

export const currentPlayerComputer = new Player({
  id: 'computer',
  name: 'Computadora',
  score: 0,
});

export const testPlayer1 = new Player({
  id: 'player1',
  name: 'Jugador 1',
  score: '10',
});
const testPlayer2 = new Player({
  id: 'player2',
  name: 'Jugador 2',
  score: '12',
});

const testPlayer3 = new Player({
  id: 'player3',
  name: 'Jugador 3',
  score: 21,
});

const testPlayer4 = new Player({
  id: 'player4',
  name: 'Jugador 4',
  score: 22,
});

export const testArrayOfPlayers = [currentPlayerComputer];
export const testArrayOfOnePlayer = [testPlayer1, currentPlayerComputer];

export const testBlackjackArrayOfPlayers = [testPlayer3, currentPlayerComputer];
export const testBlackjackArrayOfPlayers2 = [
  testPlayer4,
  currentPlayerComputer,
];

export const emptyTestArrayOfPlayers = [];

export const testScoreBoard = [testPlayer1, testPlayer2];
export const emptyTestScoreBoard = [];
