// 1. sa afisam id din query params
const postId = window.location.search.substring(4);

const btnUpdate = document.getElementById('btn-update');

const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');

btnUpdate.addEventListener('click', function () {
  const post = {
    title: titleInput.value,
    text: textInput.value,
  }
  console.log(post)
})

async function getPostById(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json();
  } catch (err) {
    console.log(err)
  }
}

// getPostById(3).then(post => console.log(post))

async function previewPost() {
  const post = await getPostById(postId);
  console.log(post)
  titleInput.value = post.title;
  textInput.value = post.text;

}
previewPost()


async function updatePostServer() {

}
// id, title, text, 
updatePostServer(3, "test title", "ab text")




