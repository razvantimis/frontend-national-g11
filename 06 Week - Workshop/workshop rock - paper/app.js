// 1. Un jucator va fi PC iar celalalt noi (User)
// 2. PC: Sa facem o lista cu variantele din care PC alege random

var gameChoice = ["rock", "paper", "scissors"];
// console.log(gameChoice);

// cum generam un numar random intre 0 si lungimea array-ului
// random 0,1,2
var randomChoiceIndex = Math.floor(Math.random() * 3);
var pcChoice = gameChoice[randomChoiceIndex];
// 3. User: va avea 3 button cu optiunile si el alege una dintre ele

function addEventForUser(type) {
  var btn = document.getElementById("btn-" + type);
  btn.addEventListener("click", function () {
    console.log("user choice - " + type);
    console.log(getResult(pcChoice, type));
  });
}
addEventForUser("rock");
addEventForUser("paper");
addEventForUser("scissors");

// 4. Trebui sa comparam alegerile si sa afisam rezultatul, adica cine castiga

// rock , paper  => paper
// rock , rock => egalitate
// rock, scissors => rock
// Putem logica in functie si sa rezturneze cine castiga sau egalitate

function getResult(pcChoice, userChoice) {
  switch (userChoice) {
    case "rock":
      switch (pcChoice) {
        case "rock":
          return "win win";
        case "paper":
          return "win pc";
        case "scissors":
          return "win user";
        default:
      }
      break;
    case "paper":
      switch (pcChoice) {
        case "rock":
          return "win user";
        case "paper":
          return "win win";
        case "scissors":
          return "win pc";
        default:
      }
      break;
    case "scissors":
      switch (pcChoice) {
        case "rock":
          return "win pc";
        case "paper":
          return "win user";
        case "scissors":
          return "win win";
        default:
      }
      break;
    default:
      break;
  }
}
//console.log(getResult("rock", "paper")); // returnezi Win user
