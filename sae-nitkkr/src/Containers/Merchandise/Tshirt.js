import React, { useEffect, useState } from "react";
import "./Tshirt.css";
import tshirt from "./tshirt.png";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Components/NavBar/NavBar";

const Tshirt = () => {
  const [count, setCount] = useState(0);
  
  const [selectedSize, setSelectedSize]= useState(null);

  const [price]= useState(450);


  const handleClick =(size)=>{
    setSelectedSize(size);
  };

  const handleAddToCart=()=>{
    if(selectedSize){
      const cartItem={
     
        size:selectedSize,
        price:price,
        quantity:count,
      };

      localStorage.setItem('cartItem',JSON.stringify(cartItem));
    }
  }

  useEffect(()=>{
localStorage.setItem('selectedSize',selectedSize);
  },[selectedSize]);

  return (
    <div className="main-page">
      <NavBar />
      <div className="main-block">
        <div className="image">
          <img src={tshirt} alt="" />
        </div>

        <div className="right">
          <div className="main-heading">
            <h2>SAE Autokriti Merchandise</h2>

            <h5>T-Shirt</h5>
          </div>

          <div className="price">
            {/* <FontAwesomeIcon icon={faIndianRupee} /> */}
            <span style={{ fontSize: "20px" }}>Price: 450/-</span>
          </div>

          <div className="size_chart">
            <h3 style={{ color: "red" }}>Size-Chart</h3>

            <div className="size-content" style={{ paddingLeft: "0px" }}>
              <li>Material/Fabric : 100% Cotton</li>
              <li>Type:Round Neck t-shirt </li>
              <li>Half-sleeve</li>
              <li>Regular fit</li>
              <li>Machine-wash</li>
            </div>

            <div className="size">
              <p style={{ fontSize: "18px" }}>Size :</p>

              <div
                className="t-size"
                onClick={() => handleClick("Small")}
                style={{
                  backgroundColor: selectedSize === "Small" ? "wheat" : "white",
                }}
              >
                S
              </div>

              <div
                className="t-size"
                onClick={() => handleClick("Medium")}
                style={{
                  backgroundColor:
                    selectedSize === "Medium" ? "wheat" : "white",
                }}
              >
                M
              </div>
              <div
                className="t-size"
                onClick={() => handleClick("Large")}
                style={{
                  backgroundColor: selectedSize === "Large" ? "wheat" : "white",
                }}
              >
                L
              </div>
              <div
                className="t-size"
                onClick={() => handleClick("XL")}
                style={{
                  backgroundColor: selectedSize === "XL" ? "wheat" : "white",
                }}
              >
                XL
              </div>
              <div
                className="t-size"
                onClick={() => handleClick("XXL")}
                style={{
                  backgroundColor: selectedSize === "XXL" ? "wheat" : "white",
                }}
              >
                XXL
              </div>
            </div>
            <div className="quantity">
              <p style={{ fontSize: "18px" }}>Quantity :</p>

              <div className="number">
                <FontAwesomeIcon
                  className="plus"
                  icon={faPlusCircle}
                  onClick={() => setCount(count + 1)}
                />
                <div className="totalcount">{count}</div>
                <FontAwesomeIcon
                  className="minus"
                  icon={faMinusCircle}
                  onClick={() =>
                    count === 0 ? setCount(0) : setCount(count - 1)
                  }
                />
              </div>
            </div>

            <div className="cart-btn">
              <button className="btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
