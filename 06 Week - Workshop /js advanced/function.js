
var sumGlobal;
function sum(a, b) {
  var total = a + b;

  function test() {
    console.log(total)
  }
  return test
}

var testFn = sum(10, 5);
testFn()

console.log(sumGlobal)