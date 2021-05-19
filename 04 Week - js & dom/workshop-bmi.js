// BMI = x KG / (y M * y M)
// John Doe | M | BMI: 24 | Normal Weight
// Mary Anne | F | BMI: 30 | Obese


// am definit persoana
var person1 = {
  name: "John Doe",
  gen: "M",
  kg: 50,
  height: 1.80,
}

// calcum BMI

var bmi = person1.kg / (person1.height * person1.height);
console.log(bmi); // 15.432098765432098

// afisam stringul

/*
* If your BMI is less than 18.5, it falls within the underweight range.
● If your BMI is 18.5 to <25, it falls within the normal.
● If your BMI is 25.0 to <30, it falls within the overweight range.
● If your BMI is 30.0 or higher, it falls within the obese range.

*/

if (bmi <= 18.5) {
  console.log("underweight")
} else if (bmi <= 25) {
  console.log("normal")
} else if (bmi <= 30) {
  console.log("overweight")
} else {
  console.log("obese")
}

console.log(getBMIString(bmi));


// daca avem o lista de persoana

// 1. sa definim o lista de persoana
var person1 = {
  name: "John Doe",
  gen: "M",
  kg: 50,
  height: 1.80,
}
var person2 = {
  name: "Razvan",
  height: 1.70,
  kg: 70,
}

function createPerson(name, height, kg) {
  return {
    name: name,
    height: height,
    kg: kg,
  }
}
var personList = [
  person1,
  person2,
  { name: "person3", height: 1.90, kg: 100 },
  createPerson("p4", 1.86, 87)
];
personList.push(createPerson("p5", 1.56, 47));
personList.push("Nume persoana");

// 2. parcurgem fiecare persoana
function getBMIString(bmi) {
  if (bmi <= 18.5) {
    return "underweight"
  } else if (bmi <= 25) {
    return "normal"
  } else if (bmi <= 30) {
    return "overweight"
  } else {
    return "obese"
  }
}

for (var i = 0; i < personList.length; i++) {
  var personCurrent = personList[i];
  var bmi = personCurrent.kg / (personCurrent.height * personCurrent.height);

  // v2 fara function
  var bmiString;
  if (bmi <= 18.5) {
    bmiString = "underweight"
  } else if (bmi <= 25) {
    bmiString = "normal"
  } else if (bmi <= 30) {
    bmiString = "overweight"
  } else {
    bmiString = "obese"
  }

  console.log(
    "Name: ", personCurrent.name,
    " | BMI:", bmi,
    // " | BMI String:", getBMIString(bmi)
    " | BMI string: ", bmiString
  )
}




