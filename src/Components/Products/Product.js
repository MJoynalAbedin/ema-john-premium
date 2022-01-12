import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, price, img, seller, stock } = props.product;

  return (
    <div className="each-product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <h5>Product Added By {seller}</h5>
        <h5>Price Only {price}$</h5>
        <br />
        <h5>Only {stock} Pieces Available</h5>
        <button
          onClick={() => props.handleProductAdd(props.product)}
          className="btn-add-to-cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
