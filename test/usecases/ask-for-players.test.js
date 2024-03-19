import { askForPlayers } from '../../src/usecases/ask-for-players';

describe('testing askForPlayers function', () => {
  test('should return the number of players', () => {
    const validInput = 1;
    jest.spyOn(window, 'prompt').mockReturnValue(validInput);
    expect(askForPlayers()).toBe(validInput);
  });

  test('returns one if enter incorrectly number of players', () => {
    const invalidInput = 'Hello';
    jest.spyOn(window, 'prompt').mockReturnValue(invalidInput);
    expect(askForPlayers()).toBe(1);
  });
});
