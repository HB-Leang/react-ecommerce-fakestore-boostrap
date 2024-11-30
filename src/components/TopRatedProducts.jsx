import React, { useContext, useEffect, useState } from "react";

import Product from "./Product";
import { ProductsContext } from "../contexts/ProductContext";

function TopRatedProducts() {

  
  const { products, loading, error } = useContext(ProductsContext);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  useEffect(() => {
    const topRated = products
      .toSorted((a, b) => {
        return b.rating.rate - a.rating.rate;
      })
      .toSpliced(4,20);
    setTopRatedProducts(topRated);
  }, [products]);
  return (
    <>
      <section className="product_list best_seller">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>
                  Top Rated Products <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-12">
              <div className="d-flex">
              {topRatedProducts &&
                      topRatedProducts.map((item) => (
                        <div className="col-lg-3 col-sm-6">
                          <Product
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            rate={item.rating.rate}
                          />
                        </div>
                      ))}
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopRatedProducts;
