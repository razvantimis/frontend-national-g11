function run() {
  // cod nostru
}

// functia run va fi executa async
setTimeout(run, 0)


// exemple1
function ex1() {

  for (var index = 0; index < 5; index++) {
    setTimeout(function () {
      console.log(index + index + "00") // index=0 => 000,index=1 => 200, 
    }, 100)
  } // 000, 200, 400, 600, 800 ( fara setTimeout )

  console.log("Dupa for")
  // console.log(index)
  // index = 99;
}

// Cu setTimeout
// Sol1: 000, 200, 400, 600, 800 
// Sol2: 800  800 800  800  800

// Cand folosim var index
// Console log se executa dupa ce sa terminat for-ul 
// Sol3: 1000 de 5 ori ( corecta )

// Cand folosim let index
// Solutia corecta este 000, 200, 400, 600, 800 
// Se face closure pe index in scopul functie callback




// Este garantat ca in 1000 = 1s se executa functia run?
// Nu este garantat
setTimeout(run, 1000)