import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./ui/Router";
import PopupOpen from "./providers/popupControler";
import CartProvider from "./providers/cartContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <PopupOpen>
        <Router />
      </PopupOpen>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
