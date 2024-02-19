import styles from "./content.module.css";
import { ReactComponent as HeartIcon } from "../../../../svg/heart.svg";
import { Link } from "react-router-dom";
import GoodButton from "./goodButton";

function Goods({ item }) {
  return (
    <div className={styles.good}>
      <Link
        to={`/categories/category/${item.category}/${item.name}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.imageSide}>
          <img
            src={"https://redstore.am" + item.src}
            alt=""
            className={styles.image}
          ></img>
        </div>
        <p style={{ color: "black" }}>{item.brend}</p>
        <p className={styles.itemName}>{item.name}</p>
      </Link>
      <p className={styles.price}>{item.price} AMD</p>
      <GoodButton item={item} />
      <div className={styles.heart}>
        <HeartIcon className={styles.svg} />
      </div>
      {item.hit && <div className={styles.hit}>ՀԻԹ</div>}
      {item.new && <div className={styles.new}>ՆՈՐՈՒՅԹ</div>}
    </div>
  );
}

export default Goods;
