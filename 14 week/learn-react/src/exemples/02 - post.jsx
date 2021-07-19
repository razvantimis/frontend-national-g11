//v1 Post with DOM API

const postElement = document.createElement('div');

const postTitle = document.createElement('h1')
postTitle.innerText = 'Post 1'

const postBody = document.createElement('p');
postBody.innerText = 'Post content';

postElement.append(postTitle, postBody);

document.body.appendChild(postElement);


// v2 React Fara jsx
import React from 'react';
import ReactDOM from 'react-dom';

const postTitleReact = React.createElement('h1', null, 'Post 1 with React');
const postBodyReact = React.createElement('p', null, 'Post content with React');
const postElReact = React.createElement('div', null, postTitleReact, postBodyReact)


ReactDOM.render(
  postElReact,
  document.getElementById('root')
)

// v3 react cu js

const postJSX = (
  <div>
    <h1>Post 1 JSX</h1>
    <p>Post content JSX</p>
  </div>
)

ReactDOM.render(
  postJSX,
  document.getElementById('root')
)