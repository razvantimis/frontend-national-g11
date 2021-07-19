// Components
// este o parte din UI 
// ne ajuta sa reutilizam o parte din interfata ( UI )
// Putem face componente in react folosind functii si clasei
import React from 'react';
import ReactDOM from 'react-dom';


// O clasa de JS ca sa fie componenta React va trebui sa mostenesca React.Component
// si sa implementeaza metoda render
class PostCls extends React.Component {

  render() {

    return (
      <div>
        <h1>PostCls - item3</h1>
      </div>
    )
  }
}

function PostFun() {
  const myName = "Razvan";
  console.log('23', myName)
  return (
    <div>
      <h1>Post 1 JSX</h1>
      <p>Post content JSX</p>
      <p>Autor: {myName}</p>
    </div>
  )
}

// Function component este defapt o functie normala care returneaza cum arata UI (JSX / HTML)
function App() {
  return (
    <div>
      Hello world
      <PostFun />
      <PostFun />
      <PostFun />
      <PostFun />

      <PostCls />
    </div>
  )
}


ReactDOM.render(
  <App />, // asa se traduce React.createElement(App, null)
  document.getElementById('root')
)
