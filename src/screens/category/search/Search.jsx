import { useRef, useState } from "react";
import styles from "../category.module.css";

function Search({ catalog, setCatalog, sortedProduct }) {
  const maxPrice = Math.max(...sortedProduct.map((item) => item.price));
  let priceFrom = useRef();
  let priceTo = useRef();
  let [priceRange, setPriceRange] = useState([0, maxPrice]);
  function handle(event) {
    let brend = event.target.name;
    let sorted = catalog.filter((item) => {
      return brend === item.brend;
    });
    setCatalog(sorted);
  }

  function handlePrice() {
    let valueFrom = Number(priceFrom.current.value);
    let valueTo = Number(priceTo.current.value);
    if (isNaN(valueFrom) || isNaN(valueTo) || valueFrom > valueTo) {
      return;
    }
    let newPriceRange = [valueFrom, valueTo > maxPrice ? maxPrice : valueTo];
    setPriceRange(newPriceRange);
    let sorted = sortedProduct.filter((item) => {
      return item.price >= newPriceRange[0] && item.price <= newPriceRange[1];
    });
    setCatalog(sorted);
  }

  return (
    <div style={{ height: "120vh", width: "25%", backgroundColor: "red" }}>
      <div className={styles.brendSearch} onClick={handle}>
        <button className={styles.brend} name="google">
          google
        </button>
        <button className={styles.brend} name="samsung">
          samsung
        </button>
        <button className={styles.brend} name="iphone">
          iphone
        </button>
        <button className={styles.brend}></button>
        <button className={styles.brend}></button>
        <button className={styles.brend}></button>
        <button className={styles.brend}></button>
        <button className={styles.brend}></button>
        <button className={styles.brend}></button>
      </div>
      <div>
        <input
          ref={priceFrom}
          value={priceRange[0]}
          onInput={handlePrice}
          className={styles.price}
        ></input>
        <input
          ref={priceTo}
          value={priceRange[1]}
          onInput={handlePrice}
          className={styles.price}
        ></input>
      </div>
    </div>
  );
}

export default Search;
