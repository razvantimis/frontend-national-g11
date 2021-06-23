// 1. sa afisam id din query params
const postId = window.location.search.substring(4);

const btnUpdate = document.getElementById('btn-update');
const btnDetele = document.getElementById('btn-delete');

const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');


btnDetele.addEventListener('click', function () {
  deletePostServer(postId)
    .then(post => {
      window.location.href = "./home.html"
    })
})

btnUpdate.addEventListener('click', function () {
  const post = {
    title: titleInput.value,
    text: textInput.value,
  }
  updatePostServer(postId, post.title, post.text)
    .then(post => {
      window.location.href = "./home.html"
    })

})

async function previewPost() {
  const post = await getPostById(postId);
  console.log(post)
  titleInput.value = post.title;
  textInput.value = post.text;

}
previewPost()





