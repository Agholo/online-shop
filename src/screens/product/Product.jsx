import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import Footer from "../home/homeComponents/footer/Footer";
import styles from "./product.module.css";
import { useContext, useEffect, useState } from "react";
import { PopupControl } from "../../providers/popupControler";
import ToCart from "../../popups/toCart";
import { useParams } from "react-router-dom";
import catalogJson from "../../catalog.json";

function Product() {
  let { isOpen } = useContext(PopupControl);
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
      {isOpen && <ToCart />}
      <div className={styles.contenier}>
        <div className={styles.imageSide}>
          <img
            src={`https://redstore.am${product?.src}`}
            alt=""
            style={{ width: "auto", height: "100%" }}
          ></img>
        </div>
        <div className={styles.content}>
          <div style={{ height: "100%", width: "85%", backgroundColor: "red" }}>
            <p style={{ margin: 0 }}>{product.brend}</p>
            <p style={{ fontSize: "33px", margin: 0 }}>{product.name}</p>
            <div
              style={{
                display: "flex",
                height: "120px",
                width: "100%",
                marginBlock: "50px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  height: "100%",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <p>Գինը</p>
                <p>{product.price} AMD</p>
              </div>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  height: "100%",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <p>զաղչված Գինը</p>
                <p>{product.price} AMD</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "120px",
                width: "100%",
                marginBlock: "50px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  height: "100%",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <p>{(product.price / 12).toFixed(0)} AMD</p>
                <p>12 Ամիս ապառիկ</p>
              </div>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  height: "100%",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <p>{(product.price / 24).toFixed(0)} AMD</p>
                <p>24 Ամիս ապառիկ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
