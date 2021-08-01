import React from 'react';
import ReactDOM from 'react-dom';


// Life cycle - ciclu de viata a unei componenta din prespectiva afisari ei in UI

class MyComponent extends React.Component {


  // 0. Se creeaza componenta => se apeleaza constructorul
  constructor(props) {
    super(props);
    // orice cod scris aici se executa prima data
  }

  // 1. Componenta apare in UI ( se apeleaza automat de catre react)
  componentDidMount(){
    // se apeleaza dupa ce a fost afisata (doar odata se apeleaza)
    // De exemplu fetch la server
    // Exemple 2: setInterval
  }

  // 2. Componenta dispare din UI
  componentWillUnmount(){
    // se apeleaza inaite ca componenta sa dispara
    // Exemple 2: clean pe setInterval
  }

  componentDidUpdate(nextProps, nextState) {

  }



  render() {

    return (
      <div>test</div>
    )
  }
}


// 1. Digital timer ( setInterval)

function App() {
  return (
    <div>
      Demo
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
