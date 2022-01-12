import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../Products/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Shop.css';

const Shop = () => {

    const fakeData10 = fakeData.slice(1, 11);
    const [products, setProducts] = useState(fakeData10);
    const [shoppingCart, setShoppingCart] = useState([]);


    const handleProductAdd = (addedProduct) => {

        const newShoppingCart = [...shoppingCart, addedProduct];
        setShoppingCart(newShoppingCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product handleProductAdd={handleProductAdd} product={product} key={product.id} />)
                }
            </div>
            <div className="shopping-cart">
                <ShoppingCart shoppingCart={shoppingCart} />
            </div>
        </div>
    );
};

export default Shop;