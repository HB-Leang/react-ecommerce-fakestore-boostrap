import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductContext";
import Product from "./Product";

function Awesome() {
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    const newProducts = products.toSpliced(0, 16);
    setNewArrivals(newProducts);
  }, [products]);

  return (
    <>
      <section className="product_list section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>
                  awesome <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="">
                  <div className="row d-flex align-items-center justify-content-between">
                    {newArrivals &&
                      newArrivals.map((item) => (
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Awesome;
