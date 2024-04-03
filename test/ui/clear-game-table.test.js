import { screen } from '@testing-library/dom';
import { clearGameTable } from '../../src/ui/clear-game-table';

describe('Test clearGameTable', () => {
  test('should remove the game table element if it exists', () => {
    // Creacion del elemento
    const gameTable = document.createElement('div');
    gameTable.classList.add('game-table');

    // Adjuntar el elemento al documento
    document.body.appendChild(gameTable);

    // screen.debug() funcion que permite observar el estado del html en este punto de la ejecucion

    // Llamar a la funcion
    clearGameTable();

    // Hacer aserciones
    expect(document.querySelector('.game-table')).toBeNull();
  });

  it('should not throw an error if the game table element is not found', () => {
    expect(() => clearGameTable()).not.toThrow();
  });
});
