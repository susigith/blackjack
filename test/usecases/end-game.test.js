import { endGame } from '../../src/usecases/end-game';
import { testScoreBoard } from '../fixtures/test-players';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest
  .spyOn(global, 'alert')
  .mockImplementation((message) => expect(message).toBe('Jugador 2 Gana 🥳'));

describe('Test endGame', () => {
  test('waits 1 second before alert the winner name', () => {
    endGame(testScoreBoard);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('should alert the winner name correctly', () => {
    endGame(testScoreBoard);

    jest.runAllTimers();
    expect(alert).toHaveBeenCalledTimes(1);
  });
});
