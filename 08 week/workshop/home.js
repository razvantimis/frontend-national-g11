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
    const postHTML = createPostHTML(currentPost.id, currentPost.title, currentPost.text);

    containerListPost.appendChild(postHTML);
  }
}

getPosts()
  .then(displayPosts)
  .catch((err) => {
    console.log(err)
  });

// Creaza html pentru un singur post
function createPostHTML(id, title, text) {
  const p = document.createElement('p');
  const h1 = document.createElement('h1');
  const article = document.createElement('article');

  article.appendChild(h1)
  article.appendChild(p)

  p.innerText = text.length > 150 ? text.substring(0, 150) + "..." : text;
  h1.innerText = title;

  const editLink = document.createElement('a');
  editLink.href = `./edit-post.html?id=${id}`;
  editLink.innerText = 'Edit'
  article.appendChild(editLink);

  return article;
}


// test code
function testCreatePostHTML() {
  const postDemoHTML = createPostHTML("titlu 1", "descrierea postului")
  console.log("createPostHTML() =", postDemoHTML)
}
function testDisplayPosts() {

  displayPosts([{ title: 'razvan', text: 'test', id: 1 }])
}

