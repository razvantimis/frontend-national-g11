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


async function updatePostServer(id, title, text) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      text
    })
  })
  return response.json();
}
// id, title, text,
// updatePostServer(3, "bbbbbtest title", "ab text")
//   .then(post => console.log(post))


async function deletePostServer(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  });
  return response.json();
}

// deletePostServer(1623684276744).then(post => console.log(post))




