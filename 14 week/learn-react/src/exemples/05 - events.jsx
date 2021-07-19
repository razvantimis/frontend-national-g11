// Events

import React from 'react';
import ReactDOM from 'react-dom';

class AddPostWithoutForm extends React.Component {

  savePost() {
    console.log('---- save post ------')
    console.log('value =', this.value)
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <input onChange={(event) => {
          const { value } = event.target
          this.value = value;
        }} />
        <button
          onClick={() => {
            this.savePost();
          }}
        >Save</button>
      </div>
    )
  }
}
// htmlElement.onclick = function () {}

class AddPostWithForm extends React.Component {

  savePost(event) {
    event.preventDefault();
    console.log('---- save post ------')
    console.log('user value =', event.target.user.value)
  }

  render() {
    return (
      <form onSubmit={this.savePost}>
        <h1>Add post</h1>
        <input name="user" />
        <input name="value2" />
        <input name="value3" />
        <button type="submit">Save</button>
      </form>
    )
  }
}

function App() {

  return (
    <div>
      {/* <AddPostWithoutForm /> */}
      <AddPostWithForm />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
