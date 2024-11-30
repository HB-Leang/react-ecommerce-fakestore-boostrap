import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Image from "../components/designLayouts/Image";

function ProductDetail() {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    setProductInfo(location.state.item);
  }, [location, productInfo]);

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
                <div className="card_area d-flex justify-content-between align-items-center">
                  <div className="product_count">
                    <span className="inumber-decrement">
                      {" "}
                      <i className="ti-minus" />
                    </span>
                    <input
                      className="input-number"
                      type="text"
                      defaultValue={1}
                      min={0}
                      max={10}
                    />
                    <span className="number-increment">
                      {" "}
                      <i className="ti-plus" />
                    </span>
                  </div>
                  <a href="#" className="btn_3">
                    add to cart
                  </a>
                  <a href="#" className="like_us">
                    {" "}
                    <i className="ti-heart" />{" "}
                  </a>
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
