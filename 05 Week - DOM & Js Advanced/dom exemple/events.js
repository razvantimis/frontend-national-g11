// 5. Events

// selectam button sau elementul pe care se face eventul
var btn = document.getElementById('btn-add');

var input = document.getElementById('event-input')

console.log(btn, input)

btn.addEventListener('click', function (event) {
  // console.log(event)
  // if (event.altKey) {
  //   console.log('daca sa dat click + alt')
  // }
  console.log('sa dat click pe button')
  console.log('Valoare din input:', input.value)
  // console.log(document.getElementById('event-input').value)
})


// input.addEventListener('input', function (event) {
//   console.log(event)
//   // event.target.value
//   console.log(event.target.value)
// })

// alta metoda de a adauga un event
// var btn2 = document.getElementById('btn2');

function clickBtn2() {
  console.log('am dat click pe btn2')
}

// btn2.onclick = clickBtn2;
