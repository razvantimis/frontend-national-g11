import React, { useState } from 'react'
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
// const product1 = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   quantity: 2,
// }
// const productCartList = [product1, product1, product1, product1, product1];
//======== mock data ========

function App() {
  const [cartList, setCartList] = useState([]);

  const handleAddProductToCart = (product) => {
    // facem logica de adaugare 

    console.log('handleAddProductToCart', product);

    const newList = [...cartList]

    const index = newList.findIndex(item => item.id === product.id);
    if (index !== -1) {
      newList[index].quantity++;
      console.log(newList[index]);
    } else {
      product.quantity = 1;
      newList.push(product);
    }
    // facem update la state cartList
    // setCartList(noua valoare)
    setCartList(newList);
  }

  return (
    <BrowserRouter>
      {/* https://reactjs.org/docs/context.html */}
      <div className="App">
        <Header />
        <Switch>
          <Route path="/myCart">
            <Cart productCartList={cartList} />
          </Route>
          <Route path="/test">
            My test router
          </Route>
          <Route path="/">
            <Home
              onAddToCart={(product) => {
                // console.log("app", product)
                handleAddProductToCart(product)
              }}

              // onAddToCart={handleAddProductToCart}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
