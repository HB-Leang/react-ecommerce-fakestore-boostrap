import React from "react";
import { banner1 } from "../assets/index";
import Image from "./designLayouts/Image";

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
                          <h1>Wood &amp; Cloth Sofa</h1>
                          <p>
                            Incididunt ut labore et dolore magna aliqua quis
                            ipsum suspendisse ultrices gravida. Risus commodo
                            viverra
                          </p>
                          <a href="#" className="btn_2">
                            buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="banner_img d-none d-lg-block">
                    <Image imgSrc={banner1}/>
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
