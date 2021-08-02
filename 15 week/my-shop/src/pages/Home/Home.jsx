import React from 'react';
import './Home.css';
import Product from '../../components/Product'
// https://fakestoreapi.com/

const product1 = {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}
const Home = () => {

  return (
    <div className="home">
      <Product title="title1" price={100} image={product1.image} />
      <Product title="title2" price={200} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <Product title="title3" price={300} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
    </div>
  )
}

export default Home;