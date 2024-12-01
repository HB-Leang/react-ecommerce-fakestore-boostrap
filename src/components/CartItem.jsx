import React, { useContext } from "react";
import Image from "./designLayouts/Image";
import { CartContext } from "../contexts/CartContext";
function CartItem(props) {
  const {increment, decrement} = useContext(CartContext);
  return (
    <>
      <tr>
        <td>
          <div className="media">
            <div className="d-flex" style={{height : "100px"}}>
              <Image imgSrc={props.image}/>
            </div>
            <div className="media-body">
              <p>{props.title}</p>
            </div>
          </div>
        </td>
        <td>
          <h5>${props.price.toFixed(2)}</h5>
        </td>
        <td>
          <div className="product_count">
            <span className="input-number-decrement" onClick={()=>decrement(props.id)}>
              {" "}
              <i className="ti-angle-down" />
            </span>
            <input
              className="input-number"
              type="text"
              value={props.quantity}
              readOnly
              // defaultValue={1}
              // min={0}
              // max={10}
            />
            <span className="input-number-increment" onClick={()=> increment(props.id)}>
              {" "}
              <i className="ti-angle-up" />
            </span>
          </div>
        </td>
        <td>
          <h5>${(props.price * props.quantity).toFixed(2)}</h5>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
