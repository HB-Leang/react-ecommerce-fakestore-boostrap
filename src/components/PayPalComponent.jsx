import React, { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CartContext } from "../contexts/CartContext";

const PayPalComponent = (props) => {
    const {clearCart} = useContext(CartContext);
  // PayPal button click handlers
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.totalCheckout, // Amount to be charged
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given_name}.\nThank you for your order!`);
      clearCart();
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "ASJ71bEax7BVSWSesM_0jM0SUszwcUGJmTzb4PPpAlKucNfmEDudOsTG9YnR6boJ-4Vl759vsnNz8_M-" }}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err) => console.error("PayPal Button Error:", err)}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalComponent;
