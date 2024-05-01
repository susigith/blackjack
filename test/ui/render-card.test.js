import { screen } from '@testing-library/dom';
import { renderCard } from '../../src/ui';
import { testCard } from '../fixtures/test-deck';
import { testPlayer1 } from '../fixtures/test-players';

beforeEach(() => (document.getElementsByTagName('html')[0].innerHTML = ''));

describe('Test renderCard', () => {
  test('should render cards correctly', () => {
    const cardsDeck = document.createElement('div');
    cardsDeck.classList.add(`${testPlayer1.id}-cards-deck`);
    document.body.appendChild(cardsDeck);

    renderCard(testCard.cardType, testPlayer1.id);
    const cardImg = document.querySelector('.cards');

    // Utilizando custom jest matchers de @testing-library/jest-dom toBeInTheDocument
    expect(cardImg).toBeInTheDocument();
    expect(cardImg.getAttribute('src')).toBe(`/cartas/${testCard.cardType}.png`);
  });

  test('should throw an Error if the parameters are not sent', () => {
    expect(() => renderCard()).toThrow();
  });

  test('should throw an Error if player deck cannot be found', () => {
    const cardsDeck = document.createElement('div');
    // cardsDeck.classList.add(`${testPlayer1.id}-cards-deck`); // class assignment omitted
    document.body.appendChild(cardsDeck);

    expect(() => renderCard(testCard.cardType, testPlayer1.id)).toThrow('jugador deck cannot be found');
  });
});
