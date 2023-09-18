import React from "react";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import "./merchandise.css";
import NavBar from "./../../Components/NavBar/NavBar";
import { addToCart } from "./cart.js";
import { Link } from "react-router-dom";

export function Products(props) {
  return (
    <>
      <script src="./cart.js"></script>
      <div className="productList">
        <div key={props.id} className="productCard">
          <img
            src={props.image}
            alt="product-img"
            className="productImage"
          ></img>

          {/* <FaShoppingCart className={"productCard__cart"} onClick={addToCart} /> */}
          {/* <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} /> */}

          <div className="productCard__content">
            <div className="blockTitle">
              <h3 className="productName">{props.name}</h3>
            </div>
            <div className="displayStack__1">
              <div className="productPrice">${props.price}</div>
              {/* <div className='productSales'>{props.totalSales} units sold</div> */}
            </div>
            <div className="displayStack__2">
              {/* <div className='productRating'>
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1 } key={index} />
                            ))}
                        </div>
                        <div className='productTime'>{props.timeLeft} days left</div> */}

              <Link to="/merchandise/tshirt">
                <div
                  onClick={() => {
                    addToCart(props);
                  }}
                  className="addToCart_button"
                >
                  Add to Cart
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
