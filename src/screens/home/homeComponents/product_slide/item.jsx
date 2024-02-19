import styles from "./products.module.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Link
      to={`/categories/category${props.href}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={styles.item_block}>
        <img
          src={props.png}
          alt={props.name}
          className={styles.sliderImg}
        ></img>
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default Item;
