import { Player } from '../../src/models';
import { askForPlayers, createPlayers } from '../../src/usecases';

jest.mock('../../src/usecases/ask-for-players', () => ({
  askForPlayers: jest.fn(() => 1),
}));

describe('Test createPlayers', () => {
  test('should return an array with the total players plus the computer at the end', () => {
    const totalPlayers = askForPlayers();
    const arrayOfPlayers = createPlayers();
    const lastIndex = arrayOfPlayers.length - 1;

    expect(arrayOfPlayers.length).toBe(totalPlayers + 1);

    expect(
      arrayOfPlayers.every((player) => player instanceof Player)
    ).toBeTruthy();

    expect(arrayOfPlayers[lastIndex]).toEqual({
      id: 'computer',
      name: 'Computadora',
      score: 0,
    });
  });
});
