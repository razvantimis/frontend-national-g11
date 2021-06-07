const h = 10;

function hello() {
  return 'hello'
}
// concat string
const str2 = 'dasdas' + h + 'dsad' + (h + 34) + hello()
// es6 template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const str = `dasdas ${h} 
  ce face etc
  etc ${h + 34} = ${hello()}
 
 `