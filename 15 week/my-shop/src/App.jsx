import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      {/* https://reactjs.org/docs/context.html */}
      <div className="App">
        <Header />
        <Switch>
          <Route path="/myCart">
            <Cart />
          </Route>
          <Route path="/test">
            My test router
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
