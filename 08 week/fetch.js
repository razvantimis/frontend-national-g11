
// JSON.stringly - transforma un obiect js in string
// JSON.parse - transforma string inapoi in js object

const user = { id: 1, name: 'Alex' }

const result = JSON.stringify(user)
console.log(result)

// https://jsonplaceholder.typicode.com/
function ex1Fetch() {
  // fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(todo => {
      console.log(todo.id)
    })
}

function postEx2() {
  fetch('url-server', {
    method: 'POST',
    body: JSON.stringify({ a: 1 })
  })
}