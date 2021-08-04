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
//======== mock data ========
const product1 = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  quantity: 2,
}
const productCartList = [product1, product1, product1, product1, product1];
//======== mock data ========

function App() {

  return (
    <BrowserRouter>
      {/* https://reactjs.org/docs/context.html */}
      <div className="App">
        <Header />
        <Switch>
          <Route path="/myCart">
            <Cart productCartList={productCartList} />
          </Route>
          <Route path="/test">
            My test router
          </Route>
          <Route path="/">
            <Home onAddToCart={(product) => {
              // add to productList
            }} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
