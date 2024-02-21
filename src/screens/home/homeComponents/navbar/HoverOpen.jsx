import styles from "./navbar.module.css";
import productJson from "../product_slide/products.json";
import { Link } from "react-router-dom";

function HoverOpen() {
  let products = productJson.products;
  return (
    <div className={styles.hoverCont}>
      {products.map((product, index) => {
        return (
          <Link
            to={`/categories/category${product.href}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <div className={styles.bt}>
              <img src={`https://redstore.am${product.png}`} alt=""></img>
              <p style={{ color: "black" }}>{product.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HoverOpen;
