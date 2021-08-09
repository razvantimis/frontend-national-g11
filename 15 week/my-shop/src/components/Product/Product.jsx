import React from 'react';
import './Product.css';

const Product = (props) => {

  return (
    <div
      className="product"
      style={props.style}
    >
      <img src={props.image} width={props.width || '150'} />
      <h2>{props.title}</h2>
      <h3>Price:{props.price} Lei</h3>
      {props.onAddToCart ? <button onClick={props.onAddToCart}>Add to cart</button> : null}
    </div>
  )
}

export default Product;

