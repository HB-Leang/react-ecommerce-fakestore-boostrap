import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductsProvider } from "./contexts/ProductContext.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
 
    <ProductsProvider> <CartProvider>
      <StrictMode>
        <App />
      </StrictMode></CartProvider>
    </ProductsProvider>
  
);
