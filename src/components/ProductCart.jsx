import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function ProductCart() {
  const { cart, getSubTotal } = useContext(CartContext);

  return (
    <>
      {/*================Cart Area =================*/}
      <section className="cart_area padding_top">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart && cart.length > 0 ? (
                    cart.map((item) => (
                      <CartItem key={item.id} {...item} /> // Ensure to pass a unique key and necessary props
                    ))
                  ) : (
                    <tr>
                      <td colSpan={"4"}>Cart is empty.</td>
                    </tr>
                  )}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>${getSubTotal().toFixed(2)}</h5>
                    </td>
                  </tr>
                  {/* <CartItem/>
            <CartItem/> */}
                </tbody>
              </table>
              <div className="checkout_btn_inner float-right">
                <Link to="/shop" className="btn_1 mr-4">
                  Continue Shopping
                </Link>
                <Link to="/checkout" className="btn_1 checkout_btn_1">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Cart Area =================*/}
    </>
  );
}

export default ProductCart;
