import './style.css'
import Game from './src/Game';

const map = document.querySelector('#app');

const game = new Game(map);
game.start()




