// Facem request la server dupa posturile
function getPosts() {
  return fetch('http://localhost:3000/posts')
    .then(function (response) {
      return response.json();
    })
}

// Ea se ocupa doar cu afisarea in html a unei liste de posturi
const displayPosts = (posts) => { // merge si cu function sa dam la then
  // console.log("getPosts() =", posts)
  // sa afisam posturile in container
  const containerListPost = document.getElementById('list-post');
  for (let index = 0; index < posts.length; index++) {
    const currentPost = posts[index];
    const postHTML = createPostHTML(currentPost.title, currentPost.text);
    containerListPost.appendChild(postHTML);
  }
}

getPosts()
  .then(displayPosts)
  .catch((err) => {
    console.log(err)
  });

// Creaza html pentru un singur post
function createPostHTML(title, text) {
  const p = document.createElement('p');
  const h1 = document.createElement('h1');
  const article = document.createElement('article');

  article.appendChild(h1)
  article.appendChild(p)

  p.innerText = text;
  h1.innerText = title;

  return article;
}

function testCreatePostHTML() {
  const postDemoHTML = createPostHTML("titlu 1", "descrierea postului")
  console.log("createPostHTML() =", postDemoHTML)
}
function testDisplayPosts() {

  displayPosts([{ title: 'razvan', text: 'test', id: 1 }])
}

