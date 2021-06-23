const btnAdd = document.getElementById('btn-add');

const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');

btnAdd.addEventListener('click', function () {

  addPostServer(titleInput.value, textInput.value)
    .then(post => {
      window.location.href = "./home.html"
    })
})


async function addPostServer(title, text) {
  const response = await fetch('http://localhost:3000/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      text
    })
  })
  return response.json();
}

// addPostServer('title1', 'text2').then(post => console.log(post))