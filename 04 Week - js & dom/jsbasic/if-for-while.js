// Flow control
// if, for, while, switch, 

// if
var conditie1 = true;
var number = 10;
if (conditie1 && 10 > number) {
  // cod care vream sa se executa daca conditia este adevarata
  // daca number < 10
} else {
  // daca number > 10
}

// orice contine o valoare este true
var name1 = "razvan"
if (name1 && 1 && {}) {
  console.log("1 este adevarat")
}


// nested if

if (conditie1) {
  // se executa codul de aici daca 
  // conditie1 = true
} else if (conditie2) {
  // se executa codul de aici daca 
  // conditie1 = false si conditie2 = true

} else if (conditie3) {
  // se executa codul de aici daca 
  // conditie1 = false si conditie2 = false si conditie3 = true

} else {
  // toate sunt false
}

// switch

if (type == "1") {
  // case "1"
} else if (type == "2") {

} else {
  // default de la switch
}

var type = "1" // poate fi 2, 3
switch (type) {
  case "1":
    console.log("daca type === 1");
    break;
  case "2":
    console.log("daca type === 2");
    break;
  case "3":
    console.log("daca type === 3");
    break;
  default:
    console.log("nici un case existent")
}


console.log("-------- for -----------")
// for - parcurgem liste
var list1 = [1, 2, 33, 8, 9, 2225, 332, 20, 3];

// index++ <=> index = index + 1;
var sum = 0;
for (var index = 20; index < list1.length && index < 10; index = index + 1) {
  var element = list1[index]; // ia fiecare element din array pe rand
  if (element % 2 == 0) { // daca element este par atunci
    sum = sum + element;
  }
}
console.log(sum)
console.log("\n") // ca un <br> , face o linie noua

// nested for
// for1: index 0 => face de 10x for2
// for1: index 1 => face de 10x for2
for (var index = 0; index < 10; index++) {
  for (var index2 = 0; index2 < 10; index2++) {
    console.log("index=", index);
    console.log("index2=", index2);
  }
}

console.log("------ while ----------");


// la fel ca for
var index = 11;
while (index < 10) {

  // codul sta in fata incrementari
  index = index + 1;
}

// do while
// daca codul din block trebuie execut cel putin o data
do {
  // prima data se executa codul iar dupa se verifica conditia
  // codul
} while (index < 10)






