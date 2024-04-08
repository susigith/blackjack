import { Player } from '../../src/models';

describe('Test Player class', () => {
  test('should call constructor', () => {
    const player = new Player({ id: 'player3', name: 'Player 3', score: 0 });

    const { id, name, score } = player;

    expect(id).toBe('player3');
    expect(name).toBe('Player 3');
    expect(score).toBe(0);
  });
});
