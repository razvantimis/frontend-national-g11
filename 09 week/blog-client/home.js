// Ea se ocupa doar cu afisarea in html a unei liste de posturi
const displayPostsInHTML = (posts) => { // merge si cu function sa dam la then
  // sa afisam posturile in container
  const containerListPost = document.getElementById('list-post');


  // .map = tranforma posts => posts HTML 
  // am inlocuit prima parte din for
  // const postsHTML = posts.map((post) => {
  //   const postHTML = createPostHTML(post.id, post.title, post.text);
  //   return postHTML;
  // })
  const postsHTML = posts.map((post) => createPostHTML(post.id, post.title, post.text))
  containerListPost.append(...postsHTML)
  // containerListPost.append(postsHTML[0], postsHTML[1], postsHTML[2], postsHTML[3], ..... )


  // for (let index = 0; index < posts.length; index++) {
  //   const currentPost = posts[index];
  //   const postHTML = createPostHTML(currentPost.id, currentPost.title, currentPost.text);

  //   containerListPost.appendChild(postHTML);
  // }
}

async function showPosts() {
  const posts = await getPosts();
  displayPostsInHTML(posts)
}
showPosts();

// getPosts()
//   .then(displayPosts)
//   .catch((err) => {
//     console.log(err)
//   });

// Creaza html pentru un singur post
function createPostHTML(id, title, text) {
  /// v1
  // const p = document.createElement('p');
  // const h1 = document.createElement('h1');
  // const article = document.createElement('article');

  // article.appendChild(h1)
  // article.appendChild(p)
  // p.innerText = text && text.length > 150 ? text.substring(0, 150) + "..." : text;
  // h1.innerText = title;

  // const editLink = document.createElement('a');
  // editLink.href = `./edit-post.html?id=${id}`;
  // editLink.innerText = 'Edit'
  // article.appendChild(editLink);

  // v2
  const article = document.createElement('article');

  // template string
  const summaryText = text && text.length > 150 ? text.substring(0, 150) + "..." : text;
  article.innerHTML = `
    <h1>${title}</h1>
    <p>${summaryText}</p>
    <a href="./edit-post.html?id=${id}">Edit</a>
  `
  return article;
}


// test code
function testCreatePostHTML() {
  const postDemoHTML = createPostHTML("titlu 1", "descrierea postului")
  console.log("createPostHTML() =", postDemoHTML)
}
function testDisplayPosts() {
  displayPostsInHTML([{ title: 'razvan', text: 'test', id: 1 }])
}

