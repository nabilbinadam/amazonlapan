import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ tittle, image, price, rating,id }) {

const [state, dispatch] = useStateValue();

const addToBasket = () => {

     dispatch({
               type: 'ADD_TO_BASKET',
               item: {
                      id: id,
                      tittle: tittle,
                      image : image,
                      price: price,
                      rating: rating,
               }
     });
};




  return (
    <div className="product">
      <div className="product__info">
        <p>{tittle}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        className="product__picture"
        src={image} alt=""
      />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
