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
  componentDidMount() {
    // se apeleaza dupa ce a fost afisata (doar odata se apeleaza)
    // De exemplu fetch la server
    // Exemple 2: setInterval
  }

  // 2. Componenta dispare din UI
  componentWillUnmount() {
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

class DigitalTimer extends React.Component {

  constructor(props) {
    super(props);
    // this.secondsCount = 0
    this.state = {
      secondsCount: 0,
      minutesCount: 59,
      hoursCount: 0,
    }
  }

  // Dupa e apare componenta
  componentDidMount() {
    // sa pornim timerul ( setInterval )
    this.intervalId = setInterval(() => {
      // let secondsCount = this.state.secondsCount;
      // let minutesCount = this.state.minutesCount;
      // let hoursCount = this.state.hoursCount;

      let { secondsCount, minutesCount, hoursCount } = this.state;

      secondsCount = secondsCount + 1;
      if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;
      }

      if (minutesCount === 60) {
        minutesCount = 0;
        hoursCount++;
      }

      this.setState({
        secondsCount,
        minutesCount,
        hoursCount,
      })

    }, 1000)

  }

  componentWillUnmount() {
    // trebuie sa oprim timerul ( clearInterval )
    clearInterval(this.intervalId);
  }


  render() {
    const { secondsCount } = this.state
    return (
      <div>
        <span>{this.state.hoursCount}:</span>
        <span>{this.state.minutesCount}:</span>
        <span>{secondsCount < 10 ? '0' + secondsCount : secondsCount}</span>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <DigitalTimer />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
