function getPosts() {
  return fetch('http://localhost:3000/posts')
    .then(function (response) {
      return response.json();
    })
}

getPosts()
  .then((posts) => {
    console.log("getPosts() =", posts)
  })
  .catch((err) => {
    console.log(err)
  });