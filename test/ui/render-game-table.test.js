import { screen } from '@testing-library/dom';
import { renderGameTable } from '../../src/ui/render-game-table';
import { testArrayOfOnePlayer } from '../fixtures/test-players';

describe('Test renderGameTable', () => {
  test('should first', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    renderGameTable(testArrayOfOnePlayer, element);

    const playersHeadings = screen.getAllByRole('heading', {
      level: 2,
    });

    const playersHeadingsCount = playersHeadings.filter((playerHeading) =>
      playerHeading.innerText.includes('Jugador')
    );

    expect(document.querySelector('.game-table')).toBeInTheDocument();
    expect(playersHeadingsCount.length + 1).toBe(testArrayOfOnePlayer.length);
    expect(
      playersHeadings.find((playerHeading) =>
        playerHeading.innerText.includes('Computadora')
      )
    ).toBeTruthy();
  });

  test('should throw an Error if the parameters are not sent', () => {
    expect(() => renderGameTable()).toThrow(
      'Parameters arrayOfPlayers and element are required'
    );
  });
});
