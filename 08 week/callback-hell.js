

// Exemple 
// 1. Cerem data despre user de la un serve
// 2. Cerem posturile de la acel user
// 3. Cerem commentarile de la fiecare post
// 4. Cerem numarul de like-uri de la fiecare comment
// let globalUser;
function withoutPromise() {
  function getUserData(callbackSuccess) {
    setTimeout(() => { // ca un call spre server
      const user = { id: 1, name: "Alex" };
      // const userData = { id: 2, name: 'test' }
      callbackSuccess(user); // deci nu se poate doar cu callback fn
      // globalUser = user;
      // return globalUser
    }, 1000)
  }

  function getPostsByUserId(userId, callbackSuccess) {
    setTimeout(() => { // executa codul async
      // presupunem ca facem o filter pe posturi dupa user id
      const posts = [
        { id: 341, title: 'first post', userId: 1 },
        { id: 351, title: 'second post', userId: 1 }
      ];
      // sa executa aici codul care aduce comment
      callbackSuccess(posts);

    }, 1000)
  }

  function getCommentByPostId(postId, callback) {
    setTimeout(() => { // executa codul async
      const comments = [{ id: 2, text: 'Ce faci?' }]

      callback(comments);
    }, 1000)
  }

  function getLikesByCommentId(commentId, callback) {
    setTimeout(() => { // executa codul async
      const likes = [{ id: 2, count: 0 }]

      callback(likes);
    }, 1000)

  }


  getUserData(
    function (userData) { // callback1: se executa dupa ce vin datele de la user
      console.log(userData);
      getPostsByUserId(userData.id,
        function (posts) {// callback2: se executa dupa ce vin posturile pentru user
          console.log(posts)
          for (let index = 0; index < posts.length; index++) {
            const currentPost = posts[index]
            getCommentByPostId(currentPost.id, function (comments) {// callback3: comentari pentru fiecare post

              for (let index = 0; index < comments.length; index++) {
                const currentComment = comments[index]
                getLikesByCommentId(currentComment.id, function (likes) { // callback4
                  console.log(likes)
                })
              }
            })
          }
        })
    }
  )
  // console.log(globalUser)
}


function withPromise() {


  function getUserData() {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => { // ca un call spre server
        const user = { id: 1, name: "Alex" };
        resolve(user); // deci nu se poate doar cu callback fn
      }, 1000)
    })
    return promise1;
  }

  function getPostsByUserId(userId) {
    const promise1 = new Promise((resolve) => {
      setTimeout(() => { // executa codul async
        // presupunem ca facem o filter pe posturi dupa user id
        const posts = [
          { id: 341, title: 'first post', userId: 1 },
          { id: 351, title: 'second post', userId: 1 }
        ];
        // sa executa aici codul care aduce comment
        resolve(posts);
      }, 1000)
    })
    return promise1;
  }

  function getCommentByPostId(postId) {
    return new Promise((resolve) => {
      setTimeout(() => { // executa codul async
        const comments = [{ id: 2, text: 'Ce faci?' }]

        resolve(comments);
      }, 1000)
    });
  }


  getUserData()
    .then((userData) => { // { id: 1, name: "Alex" }
      console.log(userData)
      return getPostsByUserId(userData.id) // 1
    })
    .then((posts) => {
      console.log(posts)
      for (let index = 0; index < posts.length; index++) {
        const currentPost = posts[index];
        getCommentByPostId(currentPost.id).then((comments) => {
          // commenturile pentru fiecare post
          console.log(comments)
        })
      }

    })

  /* es6 async/await
   const userData = await getUserData();
   const posts = await getPostsByUserId(userData.id);
  */
}
