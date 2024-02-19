import { useContext, useEffect, useState } from "react";
import styles from "./popup.module.css";
import { PopupControl } from "../providers/popupControler";
import { cartContext } from "../providers/cartContext";

function ToCart() {
  let { isOpen, setOpen } = useContext(PopupControl);
  let { itemsInCart, changeItems } = useContext(cartContext);
  let [totalPrice, setPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = itemsInCart.reduce(
      (acc, item) => acc + item.price,
      0
    );
    setPrice(newTotalPrice);
  }, [itemsInCart]);
  return (
    <div className={styles.background} onClick={() => setOpen(!isOpen)}>
      <div className={styles.name} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            ԳՆՈՒՄՆԵՐԻ ԶԱՄԲՅՈՒՂ
          </div>
          <button onClick={() => setOpen(!isOpen)} className={styles.exit}>
            X
          </button>
        </div>
        <div className={styles.productSide}>
          {itemsInCart.map((item, index) => {
            return (
              <div className={styles.product} key={index}>
                <button
                  onClick={() => {
                    changeItems(itemsInCart.filter((_, i) => i !== index));
                  }}
                  className={styles.delete}
                >
                  X
                </button>
                <img
                  src={"https://redstore.am" + item.src}
                  alt=""
                  style={{ height: "120px", width: "120px" }}
                ></img>
                <p>{item.name}</p>
                <p
                  style={{
                    marginLeft: "auto",
                    fontSize: "20px",
                    marginRight: "15px",
                  }}
                >
                  {item.price} AMD
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.total}>
          <p style={{ fontSize: "22px" }}>Ենթակա է վճարման</p>
          <p style={{ fontSize: "22px" }}>{totalPrice} AMD</p>
        </div>
        <button className={styles.submit}>Ձևակերպել Պատվերը</button>
      </div>
    </div>
  );
}

export default ToCart;
