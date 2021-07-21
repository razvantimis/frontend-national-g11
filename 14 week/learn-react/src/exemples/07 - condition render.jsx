import React from 'react';
import ReactDOM from 'react-dom';

// 1. Daca dam click pe un button se schimba culoarea ( red/green)
// Componenta nostra va avea pe state coloarea

class ButtonColor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  render() {
    const btnStyle = {
      backgroundColor: this.state.color,
      margin: 20,
      padding: 10,
      fontSize: 26,
    }
    return (
      <button
        style={btnStyle}
        onClick={() => {
          console.log('click button')
          // this.state.color = "blue"; // nu provoaca refacerea ui pentru componenta
          if (this.state.color === 'red') {
            this.setState({ color: 'blue' }) // se apeleaza din nou render
          } else {
            this.setState({ color: 'red' })
          }
        }}
      >{this.props.label}</button>
    )
  }
}

// v2 razvan

// function ButtonColorV2() {
//   const [toggle, setToggle] = useState(true);


//   return (
//   <button
//     onClick={() => setToggle(!toggle)}
//     style={{ backgroundColor: toggle ? 'red' : 'blue' }}
//   >Text</button>)
// }



function App() {

  return (
    <div>
      <ButtonColor label="ok btn" />
      <ButtonColor label="not btn" />
      <ButtonColor label="cool" />
    </div>
  )
}


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// 2. Daca dam click pe un element dispare (advanced)
// Daca dam click pe GameObject vrem sa dispara de tot
// Daca dam click pe general new object se adauga un nou patrat (GameObject)
class GameObject extends React.Component {

  render() {
    return (
      <div style={{ height: 50, width: 50, backgroundColor: 'red' }}></div>
    )
  }
}
class AppExemple2 extends React.Component {

  constructor(props) {
    super(props);
    // this.arrayGameObjects = [<GameObject />, <GameObject />]
    // Daca vream rerandarea componentei trebuie sa folosim statul
    this.state = {
      arrayGameObjects: [<GameObject />, <GameObject />]
    }

  }

  generateNewGameObject = () => {
    console.log('generateNewGameObject')
    // this.arrayGameObjects.push(<GameObject />)
    // this.setState({arrayGameObjects: [
    //   ...this.state.arrayGameObjects, // se sparge array in elementele lui
    //   <GameObject />
    // ]})
    this.setState({
      arrayGameObjects: this.state.arrayGameObjects.concat([<GameObject />])
    })
  }

  render() {
    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: 40,
        }}>
          {this.state.arrayGameObjects}
        </div>
        <button
          onClick={this.generateNewGameObject}
        >Generate new object
        </button>
      </div>
    )
  }

}


ReactDOM.render(
  <AppExemple2 />,
  document.getElementById('root')
)
