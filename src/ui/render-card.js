import { Card, Player } from '../models';

/**
 *
 * @param {Card} card
 * @param {Player} jugador
 */
export const renderCard = (card, jugador) => {
  const player = document.querySelector(`.${jugador}`);
  const cardsDeck = document.querySelector(`.${jugador}-cards-deck`);

  const cardImg = document.createElement('img');
  cardImg.classList.add('cards');
  cardImg.src = `../public/cartas/${card}.png`;

  cardsDeck.appendChild(cardImg);
};
