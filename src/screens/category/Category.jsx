import { useMemo } from "react";
import styles from "./category.module.css";
import catalogJson from "../../catalog.json";
import Goods from "../home/homeComponents/content/goods";
import { useParams } from "react-router-dom";
import Search from "./search/Search";
import Nav from "../home/homeComponents/navbar/nav";
import Banner from "../home/homeComponents/header/banner";
import Footer from "./../home/homeComponents/footer/Footer";
import { useState } from "react";

const Category = () => {
  let { id } = useParams();
  const products = useMemo(() => {
    return catalogJson.catalog.filter((element) => {
      return element?.category === id;
    });
  }, [id]);
  const [sortedProduct, setSortedProduct] = useState(products);
  const [constSorted, setConstSorted] = useState(sortedProduct);
  return (
    <>
      <Banner />
      <Nav />
      <div className={styles.contenier}>
        <Search
          catalog={products}
          setCatalog={setSortedProduct}
          sortedProduct={constSorted}
          setConstSorted={setConstSorted}
        />
        <div className={styles.content}>
          {sortedProduct.length
            ? sortedProduct.map((item, index) => (
                <Goods key={index} item={item} />
              ))
            : "there are no products"}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
