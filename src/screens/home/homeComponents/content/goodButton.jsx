import styles from "./content.module.css";
import cartSVG from "../../../../svg/cart.svg";
import { useContext } from "react";
import { PopupControl } from "./../../../../providers/popupControler";
import { cartContext } from "../../../../providers/cartContext";

function GoodButton({ item }) {
  let { isOpen, setOpen } = useContext(PopupControl);
  let { itemsInCart, changeItems } = useContext(cartContext);

  return (
    <button
      className={styles.goodButton}
      onClick={() => {
        setOpen(!isOpen);
        itemsInCart.includes(item) || changeItems([...itemsInCart, item]);
      }}
    >
      <img src={cartSVG} alt="0"></img>
      <p>{itemsInCart.includes(item) ? "Զամբյուղում" : "Գնել"}</p>
    </button>
  );
}

export default GoodButton;
