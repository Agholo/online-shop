import { useMemo } from "react";
import styles from "./category.module.css";
import catalogJson from "../../catalog.json";
import Goods from "../home/homeComponents/content/goods";
import { useParams } from "react-router-dom";
import Search from "./search/Search";
import Nav from "../home/homeComponents/navbar/nav";
import Banner from "../home/homeComponents/header/banner";
import Footer from "./../home/homeComponents/footer/Footer";

const Category = () => {
  let { id } = useParams();
  const products = useMemo(() => {
    let list = [];
    catalogJson.catalog.forEach((element) => {
      if (element?.category === id) {
        list.push(element);
      }
    });
    return list;
  }, [id]);
  return (
    <>
      <Banner />
      <Nav />
      <div className={styles.contenier}>
        <Search />
        <div className={styles.content}>
          {products.map((item, index) => (
            <Goods key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
