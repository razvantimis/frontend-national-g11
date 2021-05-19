// 5. Events

// selectam button sau elementul pe care se face eventul
var btn = document.getElementById('btn-add');

var input = document.getElementById('event-input')

console.log(btn, input)

btn.addEventListener('click', function (event) {
  // console.log(event)
  console.log('sa dat click pe button')
  console.log('Valoare din input:', input.value)
  // console.log(document.getElementById('event-input').value)
})


// input.addEventListener('input', function (event) {
//   console.log(event)
//   // event.target.value
//   console.log(event.target.value)
// })