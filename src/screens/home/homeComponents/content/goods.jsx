import styles from "./content.module.css";
import cartSVG from "../../../../svg/cart.svg";
import { ReactComponent as HeartIcon } from "../../../../svg/heart.svg";
import { useContext } from "react";
import { PopupControl } from "./../../../../providers/popupControler";
import { cartContext } from "../../../../providers/cartContext";
import { Link } from "react-router-dom";

function Goods({ item }) {
  let { isOpen, setOpen } = useContext(PopupControl);
  let { itemsInCart, changeItems } = useContext(cartContext);
  return (
    <div className={styles.good}>
      <Link to={`/categories/category/${item.category}/${item.name}`}>
        <div className={styles.imageSide}>
          <img
            src={"https://redstore.am" + item.src}
            alt=""
            className={styles.image}
          ></img>
        </div>
      </Link>
      <p>{item.brend}</p>
      <p className={styles.itemName}>{item.name}</p>
      <p className={styles.price}>{item.price} AMD</p>
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
      <div className={styles.heart}>
        <HeartIcon className={styles.svg} />
      </div>
      {item.hit && <div className={styles.hit}>ՀԻԹ</div>}
      {item.new && <div className={styles.new}>ՆՈՐՈՒՅԹ</div>}
    </div>
  );
}

export default Goods;
