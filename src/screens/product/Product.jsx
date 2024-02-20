import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import Footer from "../home/homeComponents/footer/Footer";
import styles from "./product.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogJson from "../../catalog.json";
import GoodButton from "../home/homeComponents/content/goodButton";

function Product() {
  let { name } = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    let catalog = catalogJson.catalog;
    catalog.forEach((item) => {
      if (item.name === name) {
        setProduct(item);
      }
    });
  }, [name]);
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Banner />
      <Nav />
      <div className={styles.contenier}>
        <div className={styles.imageSide}>
          <img
            src={`https://redstore.am${product?.src}`}
            alt=""
            style={{ width: "auto", height: "100%" }}
          ></img>
        </div>
        <div className={styles.content}>
          <div style={{ height: "100%", width: "85%" }}>
            <p style={{ margin: 0 }}>{product.brend}</p>
            <p style={{ fontSize: "33px", margin: 0 }}>{product.name}</p>
            <div className={styles.y}>
              <div className={styles.x}>
                <p>Գինը</p>
                <p>{product.price} AMD</p>
              </div>
              <div className={styles.x}>
                <p>զաղչված Գինը</p>
                <p>{product.price} AMD</p>
              </div>
            </div>
            <div className={styles.y}>
              <div className={styles.x}>
                <p>{(product.price / 12).toFixed(0)} AMD</p>
                <p>12 Ամիս ապառիկ</p>
              </div>
              <div className={styles.x}>
                <p>{(product.price / 24).toFixed(0)} AMD</p>
                <p>24 Ամիս ապառիկ</p>
              </div>
            </div>
            <GoodButton item={product} />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>display {product?.description?.display}</p>
        <p>ram {product?.description?.ram}</p>
        <p>rom {product?.description?.rom}</p>
        <p>camera {product?.description?.camera}</p>
        <p>front-camera {product?.description?.front_camera}</p>
        <p>batery {product?.description?.batery}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
