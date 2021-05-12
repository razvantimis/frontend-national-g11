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

console.log("-------- for -----------")
// for - parcurgem liste
var list1 = [1, 2, 33, 8, 9, 2225, 332, 20, 3];

// index++ <=> index = index + 1;
var sum = 0;
for (var index = 0; index < list1.length; index = index + 1) {
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

