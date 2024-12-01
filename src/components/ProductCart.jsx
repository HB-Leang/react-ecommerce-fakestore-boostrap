import React from 'react';
import CartItem from './CartItem';

function ProductCart() {
    return ( <>
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
            <CartItem/>
            <CartItem/>
          </tbody>
        </table>
        <div className="checkout_btn_inner float-right">
          <a className="btn_1" href="#">Continue Shopping</a>
          <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div></section>
{/*================End Cart Area =================*/}

    </> );
}

export default ProductCart;