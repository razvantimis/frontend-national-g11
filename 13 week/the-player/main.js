import './style.css'
import Game from './src/Game';

// Monstru se misca random prin container ( cauta playerul )
// Solutia2: Se misca in continu dar isi schimba directia la un momandat
const map = document.querySelector('#app');

const game = new Game(map);
game.start()




