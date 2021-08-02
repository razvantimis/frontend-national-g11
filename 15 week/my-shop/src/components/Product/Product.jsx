import React from 'react';
import './Product.css';

const Product = (props) => {

  return (
    <div className="product">
      <img src={props.image} width="150" />
      <h2>{props.title}</h2>
      <h3>Price:{props.price} Lei</h3>
    </div>
  )
}

export default Product;

