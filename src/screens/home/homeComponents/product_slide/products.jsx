import React, { useState } from "react";
import styles from "./products.module.css";
import jsonProduct from "./products.json";
import Item from "./item.jsx";

function Products() {
  const allProducts = jsonProduct.products;
  const [currentPosition, setPosition] = useState(0);
  const maxWidth = allProducts.length * (270 + 20);
  function scrollLeft() {
    let nextPosition = currentPosition > -290 ? 0 : currentPosition + 290;
    setPosition(nextPosition);
  }

  function scrollRight() {
    let nextPosition =
      maxWidth + currentPosition > window.innerWidth
        ? currentPosition - 290
        : window.innerWidth - maxWidth;
    setPosition(nextPosition);
  }

  return (
    <div className={styles.show}>
      <button onClick={scrollLeft} className={styles.sliderButton}>
        {"<"}
      </button>
      <div
        className={styles.contenier}
        style={{ transform: `translateX(${currentPosition}px)` }}
      >
        {allProducts.map((item, index) => (
          <Item
            name={item.name}
            href={item.href}
            png={"https://redstore.am" + item.png}
          />
        ))}
      </div>
      <button onClick={scrollRight} className={styles.sliderButton}>
        {">"}
      </button>
    </div>
  );
}

export default Products;
