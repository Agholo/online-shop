import Title from "./title.jsx";
import styles from "./content.module.css";
import Goods from "./goods.jsx";

function Special(props) {
  const toShow = props.items.slice(0, 9);
  return (
    <div className={styles.contenier}>
      <Title text={props.title} />
      <div className={styles.goodsSide}>
        {toShow.map((item, index) => {
          return <Goods item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Special;
