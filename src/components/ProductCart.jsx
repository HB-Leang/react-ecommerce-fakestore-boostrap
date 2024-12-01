import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

function ProductCart() {
  const { cart } = useContext(CartContext);

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

                  {/* <CartItem/>
            <CartItem/> */}
                </tbody>
              </table>
              <div className="checkout_btn_inner float-right">
                <a className="btn_1" href="#">
                  Continue Shopping
                </a>
                <a className="btn_1 checkout_btn_1" href="#">
                  Proceed to checkout
                </a>
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
