import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductContext";
import Product from "./Product";
import Image from "./designLayouts/Image";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="col-lg-3 col-sm-6">
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
    </>
  );
}

function ProductsDisplay() {
    const { products, loading, error } = useContext(ProductsContext);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* breadcrumb start*/}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb_iner">
                <div className="breadcrumb_iner_item">
                  <h2>Shop</h2>
                  <p>
                    Home <span>-</span> Shop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}

      <section className="product_list section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>our products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-between" style={{rowGap : '30px'}}>
              <Items currentItems= {products}/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDisplay;
