import React from "react";
import Image from "./designLayouts/Image";

function CartItem(props) {
  return (
    <>
      <tr>
        <td>
          <div className="media">
            <div className="d-flex">
              <Image imgSrc="img/product/single-product/cart-1.jpg" />
            </div>
            <div className="media-body">
              <p>Minimalistic shop for multipurpose use</p>
            </div>
          </div>
        </td>
        <td>
          <h5>$360.00</h5>
        </td>
        <td>
          <div className="product_count">
            <span className="input-number-decrement">
              {" "}
              <i className="ti-angle-down" />
            </span>
            <input
              className="input-number"
              type="text"
              defaultValue={1}
              min={0}
              max={10}
            />
            <span className="input-number-increment">
              {" "}
              <i className="ti-angle-up" />
            </span>
          </div>
        </td>
        <td>
          <h5>$720.00</h5>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
