function show(){
  console.log('show.....')
}
const LIMIT_SPEED = 20;

const array = [1, 2, 3]; // nu poate fi importat in alt fisier
console.log(array)
// ca noi putem importa in alt fisier ce exporta acest fisier
export { show, LIMIT_SPEED };