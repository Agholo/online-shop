import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider({ children }) {
  let [itemsInCart, changeItems] = useState([]);
  return (
    <cartContext.Provider value={{ itemsInCart, changeItems }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
