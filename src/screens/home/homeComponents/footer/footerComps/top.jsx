import styles from "../footer.module.css";
import { Clock3, Truck, Cog } from "lucide-react";

function Top() {
  return (
    <div className={styles.contenier}>
      <div className={styles.topComponents}></div>
      <div className={styles.topComponents}>
        <Clock3 color="white" height={"55px"} width={"55px"} />
        <div className={styles.textSide}>
          <h4
            style={{
              color: "white",
              fontWeight: "bold",
              margin: "0",
              marginLeft: "10px",
            }}
          >
            Աշխատանքային ժամերը
          </h4>
          <p style={{ color: "#8EA2A1", margin: "0", marginLeft: "10px" }}>
            Երկ-Շբթ 10:00 - 20:00{" "}
          </p>
          <p style={{ color: "#8EA2A1", margin: "0", marginLeft: "10px" }}>
            Կիրակի 11:00 - 19:00{" "}
          </p>
        </div>
      </div>
      <div className={styles.topComponents}>
        <Truck color="white" height={"55px"} width={"55px"} />
        <div className={styles.textSide}>
          <h4
            style={{
              color: "white",
              fontWeight: "bold",
              margin: "0",
              marginLeft: "10px",
            }}
          >
            Առաքում
          </h4>
          <p style={{ color: "#8EA2A1", margin: "0", marginLeft: "10px" }}>
            1 աշխատանքային օրվա
          </p>
          <p style={{ color: "#8EA2A1", margin: "0", marginLeft: "10px" }}>
            ընթացքում 10:00 - 20:00
          </p>
        </div>
      </div>
      <div className={styles.topComponents}>
        <Cog color="white" height={"55px"} width={"55px"} className={styles.rotation}/>
        <div className={styles.textSide}>
          <h4
            style={{
              color: "white",
              fontWeight: "bold",
              margin: "0",
              marginLeft: "10px",
            }}
          >
            Սերվիս կենտրոն
          </h4>
          <p
            style={{ color: "#8EA2A1", margin: "0", marginLeft: "10px" }}
            className={styles.gradientText}
          >
            ՈՐԱԿՅԱԼ ՍՊԱՍԱՐԿՈՒՄ
          </p>
        </div>
      </div>
    </div>
  );
}

export default Top;
