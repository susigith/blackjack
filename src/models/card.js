export class Card {
  //Propiedades privadas # solo se declaran en esta area de la clase no directamente en el constructor
  #cardType;
  #cardValue;

  constructor({ cardType, cardValue }) {
    this.#cardType = cardType;
    this.#cardValue = cardValue;
  }

  get cardType() {
    return this.#cardType;
  }

  get cardValue() {
    return this.#cardValue;
  }
}
