import React from "react";
import { banner1 } from "../assets/index";
import Image from "./designLayouts/Image";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="">
                <div className="single_banner_slider">
                  <div className="row">
                    <div className="col-lg-5 col-md-8">
                      <div className="banner_text">
                        <div className="banner_text_iner">
                          <h1>Special Promotion</h1>
                          <p>
                            Don’t miss our Black Friday sale! Get up to 50% off
                            on all products. Shop now and save big while
                            supplies last!
                          </p>
                          <Link to='/shop' className = "btn_2">
                            buy now
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                    <div className="banner_img d-none d-lg-block">
                      <Image imgSrc={banner1} />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="slider-counter" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
