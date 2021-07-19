// Afisam un Hello World

// v1 DOM APi

const helloWorld = document.createElement('h1');
helloWorld.innerText = "Hello World with JS";

document.body.appendChild(helloWorld);

// v2 React

import React from 'react';
import ReactDOM from 'react-dom';

// Creaza obiect de tip React
const helloWorldReact = React.createElement('h1', null, "Hello World with React")

// Unde afisam obiectele de tip React in DOM (aici se foloseste DOM API)
ReactDOM.render(
  helloWorldReact,
  document.getElementById('root')
)

// v3 React jsx

const helloWorldReactJSX = (<h1>Hello World with React JSX</h1>);

ReactDOM.render(
  helloWorldReactJSX,
  document.getElementById('root')
)