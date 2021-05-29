// Ce este closure?

function parentFun(param1, param2) {
  let a = 1;
  return function innerFun() {
    // se face un obiect in scopul functiei innerFun cu ce este folosit din functia parinte
    // pentru ca parentFun dupa executie va sterge paramatri si variabile din scop
    console.log(a)
    console.log(param2)
  }
}

const innerFun1 = parentFun(10, "name")
// => Ce se intampla daca innerFun foloseste param2 si a din parentFun
innerFun1()
