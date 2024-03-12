export class Card {
  //Propiedades privadas # solo se declaran en esta area de la clase no directamente en el constructor
  #numberedCard;
  #type;
  #value;

  constructor({ numberedCard, type, value }) {
    this.#numberedCard = numberedCard;
    this.#type = type;
    this.#value = value;
  }
}
