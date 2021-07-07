async function addPostServer(title, text) {
  const response = await fetch('http://localhost:3000/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      text
    })
  })
  return response.json();
}

async function deletePostServer(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  });
  return response.json();
}

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

// Facem request la server dupa posturile
async function getPosts() {
  try {
    const response = await fetch('http://localhost:3000/posts');
    return response.json();
  } catch (err) {
    console.log(err)
  }
}

async function getPostById(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json();
  } catch (err) {
    console.log(err)
  }
}

// getPostById(3).then(post => console.log(post))


// id, title, text,
// updatePostServer(3, "bbbbbtest title", "ab text")
//   .then(post => console.log(post))

// deletePostServer(1623684276744).then(post => console.log(post))


// addPostServer('title1', 'text2').then(post => console.log(post))


class ServerApi {
  static async addPost(title, text) {
    const response = await fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        text
      })
    })
    return response.json();
  }


  static async deletePost(id) {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }
}

ServerApi.addPost()
ServerApi.deletePost()