import { Card, Player } from '../models';
/**
 *
 * @param {Card} card
 * @param {Player} jugador
 */
export const renderCard = (card, jugador) => {
  if (!card || !jugador) throw new Error('Parameters card and jugador are mandatory');

  const cardsDeck = document.querySelector(`.${jugador}-cards-deck`);
  if (!cardsDeck) throw new Error('jugador deck cannot be found');

  const cardImg = document.createElement('img');
  cardImg.classList.add('cards');
  cardImg.src = `/public/cartas/${card}.png`;

  cardsDeck.appendChild(cardImg);
};
