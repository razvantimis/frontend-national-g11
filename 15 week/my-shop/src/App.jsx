import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Cart />
    </div>
  )
}

export default App
