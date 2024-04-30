# Project Title

A classic card game for up to 3 players! In this Blackjack, the objective is to be the first to reach 21 points (or as close as possible without going over) with the sum of the cards in your hand. A standard 52-card deck is used without jokers

## Acknowledgements

- [Curso de JavaScript Moderno: Guía para dominar el lenguaje - Fernando Herrera](https://cursos.devtalles.com/courses/javascript-moderno)

## Appendix

Any additional information goes here

## Authors

- [@susigith](https://github.com/susigith)

## Tech Stack

**Client:** HTML, CSS, Javascript, Vite

**Tests:** Jest, Testing Library

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Development steps

This section describes the main steps followed to develop the Blackjack game

1. Game design:

- The flow of the game, the rules and the characteristics of Blackjack were defined.
- Diagrams and prototypes were created with the help of [Excalidraw](https://excalidraw.com/).

2. Initial installations

- [Vite](https://vitejs.dev/).

`npm create vite@latest`

3. Commands

`npm run dev`

3. Implementation:

- Organization of the directory structure by responsibilities (**models, ui, usecases**) and implementation of the features.

4. Test

- [Jest](https://jestjs.io/)

`npm install --save-dev jest`

- [Babel](https://babeljs.io/), para el uso de `imports` de Javascript

`npm install --save-dev @babel/core @babel/cli @babel/preset-env`

Luego agregar un fichero `babel.config.js` con la siguiente configuración:

`module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};`

Para simular el DOM en pruebas a funciones que manipulan el DOM

`npm install --save-dev jest-environment-jsdom`

Agregar fichero `jest.config.js` con la siguiente configuración:

`module.exports = {
  testEnvironment: 'jest-environment-jsdom',
};`

Finalmente en cuanto a testing

[DOM Testing Library](https://testing-library.com/docs/dom-testing-library/install) una solución muy liviana para probar nodos DOM (ya sea simulados con JSDOM como se proporciona de forma predeterminada con Jest o en el navegador).
