// Counter App
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// State este un obiect de javascript care tine starea UI
// Statul ne ajuta ca sa facem o componenta sa fie interactiva ( depinde de user )
class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  pressButton() {
    // setState ne asigura ca se va face update in UI
    this.setState({ counter: this.state.counter + 1 })
    console.log(this.state)
  }
  // de fiecare data cand se schimba this.state va fi apelata din nou render
  // Adica tot timpul afisam in UI versiunea actualizata a statului  
  render() {

    return (
      <div>
        <h1>Statul: {this.state.counter}</h1>
        <button onClick={() => this.pressButton()}>Click here</button>
      </div>
    )

  }
}


function CounterAppHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Statul cu Hooks: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  )
}


ReactDOM.render(
  <CounterAppHooks />,
  document.getElementById('root')
)
