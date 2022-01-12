import React, { createContext } from 'react';

const ShoppingCart = (props) => {

    const cart = props.shoppingCart;

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    const total = cart.reduce((total, product) => total + product.price, 0)

    let shipping = 0;

    if (total > 200){
        shipping = 0;
    }else if(total > 0){
        shipping = 10;
    }

    return (
        <div>
            <h4>Total Added Products: {cart.length}</h4>
            <h5>Added Product Price: {total} USD</h5>
            <h5>Shipping Cost: {shipping} USD</h5>
            <h5>Total Cost: {total+shipping}</h5>
        </div>
    );
};

export default ShoppingCart;