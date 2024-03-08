export const renderCard = (card, jugador = '.player1') => {
  const player = document.querySelector(jugador);
  const cardsDeck = player.querySelector('.cards-deck');

  const cardImg = document.createElement('img');
  cardImg.classList.add('cards');
  cardImg.src = `../public/cartas/${card}.png`;

  cardsDeck.appendChild(cardImg);
};
