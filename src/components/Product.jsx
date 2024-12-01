import React, { useContext } from "react";
import Image from "./designLayouts/Image";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Product(props) {
  const { addToCart } = useContext(CartContext);
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
      <div className="single_product_item">
        <div
          style={{
            height: "400px",
            objectFit: "scale-down",
            placeContent: "center",
            cursor : "pointer",
          }}
          onClick={handleProductDetails} 
        >
          <Image imgSrc={props.image} />
        </div>

        {/* <img src="/img/product/product_1.png" alt /> */}
        <div className="single_product_text">
          <h4>{props.title}</h4>
          <h3>${props.price}</h3>
          
          <a
            href="#"
            className="add_cart"
            onClick={(e) => {
              e.preventDefault();
              addToCart({
                id: props.id,
                image: props.image,
                title: props.title,
                price: props.price,
                description: props.description,
                category: props.category,
              });
            }}
          >
            + add to cart
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
