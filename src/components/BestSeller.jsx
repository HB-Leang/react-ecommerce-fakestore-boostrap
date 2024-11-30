import React from "react";

function BestSeller() {
  return (
    <>
      <section className="product_list best_seller section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>
                  Best Sellers <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-12">
              <div className="best_product_slider owl-carousel">
                <div className="single_product_item">
                  <img src="/img/product/product_1.png" alt />
                  <div className="single_product_text">
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                  </div>
                </div>
                <div className="single_product_item">
                  <img src="/img/product/product_2.png" alt />
                  <div className="single_product_text">
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                  </div>
                </div>
                <div className="single_product_item">
                  <img src="/img/product/product_3.png" alt />
                  <div className="single_product_text">
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                  </div>
                </div>
                <div className="single_product_item">
                  <img src="/img/product/product_4.png" alt />
                  <div className="single_product_text">
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                  </div>
                </div>
                <div className="single_product_item">
                  <img src="/img/product/product_5.png" alt />
                  <div className="single_product_text">
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSeller;
