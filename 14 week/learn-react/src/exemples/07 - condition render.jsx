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
// Daca dam click pe GameObject vrem sa dispara de tot ( adica il stergem in array )
// Daca dam click pe general new object se adauga un nou patrat (GameObject)
class GameObject extends React.Component {

  render() {
    return (
      <div
        style={{ height: 50, width: 50, backgroundColor: 'red' }}
        onClick={() => {
          this.props.clickCallBack();
        }}
      >
        Demo
      </div>
    )
  }
}
class AppGameObject extends React.Component {

  constructor(props) {
    super(props);
    // this.arrayGameObjects = [<GameObject />, <GameObject />]
    // Daca vream rerandarea componentei trebuie sa folosim statul
    this.state = {
      arrayOfNumberObject: [
        1,
        2
      ]
    }

  }

  handleClickGameObject(gameNumber) {
    console.log('handleClickGameObject:sa dat click', gameNumber)

    // Facem o copie a arrayOfNumberObject
    // Filtram toate numerele care sunt diferite de gameNumber
    const newArray = this.state.arrayOfNumberObject.filter(number => number !== gameNumber);

    // Facem update la state
    this.setState({arrayOfNumberObject: newArray});

  }

  generateNewGameObject = () => {
    // daca nu este arrow function atunci se pierde this aici in interior
    console.log('generateNewGameObject')
    // this.arrayGameObjects.push(<GameObject />)
    // this.setState({arrayGameObjects: [
    //   ...this.state.arrayGameObjects, // se sparge array in elementele lui
    //   <GameObject />
    // ]})
    this.setState({
      arrayOfNumberObject: this.state.arrayOfNumberObject.concat([this.state.arrayOfNumberObject.length + 1])
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
          {this.state.arrayOfNumberObject.map((number) => { // number = 1, 2, 3...
            return ( // number = 1
              <GameObject
                clickCallBack={() => {
                  console.log(this)
                  this.handleClickGameObject(number)
                }}
              />
            )
          })}
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
  <AppGameObject />,
  document.getElementById('root')
)
