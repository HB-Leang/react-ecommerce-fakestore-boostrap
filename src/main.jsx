import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductsProvider } from "./contexts/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ProductsProvider>
);
