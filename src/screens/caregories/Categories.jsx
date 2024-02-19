import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import styles from "./categories.module.css";
import jsonProducts from "../../screens/home/homeComponents/product_slide/products.json";
import Item from "../home/homeComponents/product_slide/item";
import Footer from "../home/homeComponents/footer/Footer";

const Categories = () => {
  const items = jsonProducts.products;
  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <Banner />
      <Nav />
      <div className={styles.contenier}>
        {items.map((item, index) => {
          return (
            <Item
              name={item.name}
              png={"https://redstore.am" + item.png}
              key={index}
              href={item.href}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
