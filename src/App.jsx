import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    // Dynamically load external JS file
    const script = document.createElement("script");
    script.src = "../public/js/custom.js"; // Path to your external JS file
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>}/>
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
