import Special from "./subContent";
import jsonCatalog from "../../../../catalog.json";
import styles from "./content.module.css";
import { useMemo } from "react";

function Content() {
  const { hit, newItems, common } = useMemo(() => {
    const hit = [];
    const newItems = [];
    const common = [];
    jsonCatalog.catalog.forEach((item) => {
      if (item.hit) {
        hit.push(item);
      }
      if (item.new) {
        newItems.push(item);
      }
      if (!(item.hit || item.new)) {
        common.push(item);
      }
    });
    return { hit, newItems, common };
  }, []);
  return (
    <div className={styles.main}>
      {/* hit */}
      <Special items={hit} title="Լավագույն Վաճառք" />
      {/* common */}
      <Special items={common} title="Հատուկ Առաջարկներ" />
      {/* new */}
      <Special items={newItems} title="Նորույթ" />
    </div>
  );
}

export default Content;
