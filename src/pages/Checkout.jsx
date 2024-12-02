import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalComponent from "../components/PayPalComponent";

function Checkout() {
  const { cart, getSubTotal, clearCart } = useContext(CartContext);

  

  return (
    <>
      {/*================Checkout Area =================*/}
      <section className="checkout_area padding_top">
        <div className="container">
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form
                  className="row contact_form"
                  action="#"
                  method="post"
                  noValidate="novalidate"
                >
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      name="name"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      name="name"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Last name"
                    />
                  </div>

                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="number"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Phone number"
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="compemailany"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Email Address"
                    />
                  </div>

                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add1"
                      name="add1"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address line 01"
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add2"
                      name="add2"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address line 02"
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Town/City"
                    />
                  </div>

                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                      placeholder="Postcode/ZIP"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <a href="#">
                        Product
                        <span>Total</span>
                      </a>
                    </li>

                    {cart && cart.length > 0 ? (
                      cart.map((item) => {
                        return (
                          <li>
                            <a
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              style={{
                                display: "flex", // Use flexbox for layout
                                justifyContent: "space-between", // Space out the content
                                alignItems: "center", // Align items vertically
                                cursor: "default",
                                
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  float: "left",
                                  flex: "1",
                                  wordWrap: "break-word",
                                  overflowWrap: "break-word",
                                  maxWidth : "180px",
                                }}
                              >
                                {item.title}
                              </span>

                              <span
                                className="middle"
                                style={{
                                  margin: "0 10px 0 0",
                                  textAlign: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                x {item.quantity}
                              </span>
                              <span className="last">${item.price * item.quantity}</span>
                            </a>
                          </li>
                        );
                      })
                    ) : (
                        <li>
                            <a href="#" onClick={(e)=>e.preventDefault()}>There no product in your cart.</a>
                        </li>
                      
                    )}
                    
                  </ul>
                  <ul className="list list_2">
                    <li>
                      <a href="#">
                        Subtotal
                        <span>${getSubTotal().toFixed(2)}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Shipping
                        <span>Flat rate: $50.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Total
                        <span>${(getSubTotal()+50).toFixed(2)}</span>
                      </a>
                    </li>
                  </ul>
                  
                  <PayPalComponent 
                    totalCheckout = {(getSubTotal()+50).toFixed(2)}
                  />

                  
                {/* <a class="btn_3" href="#">Proceed to Paypal</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Checkout Area =================*/}
    </>
  );
}

export default Checkout;
