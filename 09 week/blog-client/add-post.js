const btnAdd = document.getElementById('btn-add');

const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');

btnAdd.addEventListener('click', function () {

  addPostServer(titleInput.value, textInput.value)
    .then(post => {
      window.location.href = "./home.html"
    })
})

