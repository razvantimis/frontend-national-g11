// 1. Sa afisam lista de posturi de la server
// url: http://localhost:3000/posts


function createPostHTML(title, text) {
  const titleH1 = document.createElement('h1');
  titleH1.innerText = title;

  const textP = document.createElement('p');
  textP.innerText = text;

  const article = document.createElement('article');

  article.appendChild(titleH1);
  article.appendChild(textP);

  return article;
}

function displayPosts() {

  fetch('http://localhost:3000/posts', { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then(posts => {
      console.log(posts)

      const postListHTML = document.getElementById('post-list')
      for (let index = 0; index < posts.length; index++) {
        const currentPost = posts[index];

        const postHTML = createPostHTML(currentPost.title, currentPost.text);

        postListHTML.appendChild(postHTML)
      }

    })

}

function createPost() {
  const post = { title: 'razvan12312312321312', text: 'razvan12312312321312' }

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })

}

document.getElementById('add').addEventListener('click', function () {
  createPost();
})


displayPosts();
