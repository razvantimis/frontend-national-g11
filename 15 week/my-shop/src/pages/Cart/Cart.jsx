import React from 'react';
import Product from '../../components/Product'


function getTotalPrice(productList) {
    let totalPrice = 0;
    productList.forEach(product => {
        totalPrice = totalPrice + product.price * product.quantity;
    })

    return totalPrice;
}

const Cart = (props) => {
    const total = getTotalPrice(props.productCartList)

    return (
        <div className="cart">
            <h1>List de produse</h1>
            {props.productCartList.map(productItem => {
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