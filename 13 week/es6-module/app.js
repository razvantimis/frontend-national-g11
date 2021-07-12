// Un fisier este vazut ca un modul
// Noi aici putem importa functii,variabile,clase din alte fisiere
// Putem export functii,variabile,clase ca sa fie folosite in alte fisiere

// Mai avem variabile globale vizibile peste tot ?
// Module scope
// a va fi accesibila doar in fisierul asta
const a = 10;

// Avem o lagatura prin import/export

// tot timpul va trebuie sa folosim acelasi nume
import { show } from './file1.js';

show();

// asa facem rename la show
import { show as showNewName } from './file1.js';
// aici nu avem functia show, trebuie folosita cu nume showNewName
showNewName()
// se face un obiect file1 cu tot ce se exporta
// Se face un obiect cu tot ce exporta file1
import * as file2 from './file2.js';
// file1.show()
// file1.LIMIT_SPEED
console.log(file2)


// import './file1.js'; // executa fisierul

import Game, { Player } from './Game.js';

const game1 = new Game();
console.log(game1)
// Noi decidem prin export ce vrem sa fie folosit de alte fisiere
// Iar altele fisiere decid prin import ce vor folosi din fisierele nostre

