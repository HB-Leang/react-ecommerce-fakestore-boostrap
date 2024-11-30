import React from "react";
import Image from "./designLayouts/Image";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const _id = props.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    console.log("productItem", productItem);
    navigate(`/shop/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  return (
    <>
      <div className="single_product_item" onClick={handleProductDetails}>
        <div style={{height : "400px", objectFit : "scale-down", placeContent : "center"}}>
        <Image imgSrc={props.image} />
        </div>
        
        {/* <img src="/img/product/product_1.png" alt /> */}
        <div className="single_product_text" onClick={handleProductDetails}>
          <h4>{props.title}</h4>
          <h3>${props.price}</h3>
          <a href="#" className="add_cart">
            + add to cart
            <i className="ti-heart" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
