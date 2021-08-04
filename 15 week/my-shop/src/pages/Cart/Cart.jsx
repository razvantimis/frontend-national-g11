import React from 'react';
import Product from '../../components/Product'
//======== mock data ========
const product1 = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 2,
}
const productList = [product1, product1, product1, product1, product1];
//======== mock data ========

function getTotalPrice(productList) {
    let totalPrice = 0;
    productList.forEach(product => {
        totalPrice = totalPrice + product.price * product.quantity;
    })

    return totalPrice;
}

const Cart = (props) => {
    const total = getTotalPrice(productList)

    return (
        <div className="cart">
            <h1>List de produse</h1>
            {productList.map(productItem => {
                return (
                    <div style={{ display: 'flex' }}>
                        <Product
                            style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                marginRight: 20
                            }}
                            width={50}
                            title={productItem.title}
                            price={productItem.price}
                            image={productItem.image}
                        />
                        <h2>X {productItem.quantity}</h2>
                    </div>
                )
            })}
            <h2>Total: {total} lei</h2>
            <button>Trimite comanda</button>
        </div>
    )
}

export default Cart;