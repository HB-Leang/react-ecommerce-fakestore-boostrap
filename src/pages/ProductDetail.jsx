import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Image from "../components/designLayouts/Image";
import { CartContext } from "../contexts/CartContext";
function ProductDetail() {

  const location = useLocation();
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    setProductInfo(location.state.item);
  }, [location, productInfo]);

  const {cart, addToCart} = useContext(CartContext);
  return (
    <>
      {/*================Single Product Area =================*/}
      <div className="product_image_area section_padding">
        <hr />
        <div className="container py-4">
          <div className="row s_product_inner justify-content-between">
            <div className="col-lg-5 col-xl-5 text-center">
                <Image imgSrc={productInfo.image}/>
              
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="s_product_text">
                
                <h3>{productInfo.title}</h3>
                <h2>${productInfo.price}</h2>
                <ul className="list">
                  <li>
                    <div className="active">
                      <span>Category</span> : <span className="text-uppercase">{productInfo.category}</span>
                    </div>
                  </li>
                  <li>
                    <div href="#">
                      {" "}
                      <span>Availibility</span> : In Stock
                    </div>
                  </li>
                </ul>
                <p className="text-justify">
                  {productInfo.description}
                </p>
                <div className="card_area d-flex justify-content-center align-items-center">
                 
                  <div className="btn_3" onClick={()=> addToCart({
                    id : productInfo.id,
                    image : productInfo.image,
                    title: productInfo.title,
                    price : productInfo.price,
                    description : productInfo.description,
                    category : productInfo.category,
                  })}>
                  add to cart
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {/*================End Single Product Area =================*/}
      
    </>
  );
}

export default ProductDetail;
