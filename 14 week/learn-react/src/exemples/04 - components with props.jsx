// Components with props && styling
import React from 'react';
import ReactDOM from 'react-dom';

// Props este un mod de a parametriza o componenta
// O data unde folosim componenta dam atribute: key=valoare
// Primul parametru la function component este props
function Post(props) { // props = {title: "valoare", content: "sda"}
  const postStyle = {
    marginTop: '10px',
    border: `1px solid ${props.isGreen ? 'green': 'red'}`,
    padding: '10px'
  }
  return (
    <div
      className="post"
      style={postStyle}
    >
      {// in loc de atributul class cum era in html, folosim className
      }
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <Post title="Post13343" content="Content 1" />
      <Post title="Post2" content="Content 2" isGreen={true || false} />
      <Post title="Post 23" content="Content 23"  />
      <Post title="Post 24" content="Content 24" isGreen />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
