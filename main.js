import { Blackjack } from './src';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class='table-background'></div>
`;

const element = document.querySelector('.table-background');

Blackjack();
