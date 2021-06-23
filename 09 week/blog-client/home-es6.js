
const displayPostsInHTML = (posts) => {
  const containerListPost = document.getElementById('list-post');
  const postsHTML = posts.map(({ id, title, text }) => createPostHTML(id, title, text))
  containerListPost.append(...postsHTML)
}

async function showPosts() {
  const posts = await getPosts();
  displayPostsInHTML(posts)
}
showPosts();

// Creaza html pentru un singur post
function createPostHTML(id, title, text) {
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

