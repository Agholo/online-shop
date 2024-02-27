import styles from "../footer.module.css";

function Bottom() {
  return (
    <div className={styles.bottom}>
      <img
        src="https://redstore.am/uploads/images/RED_logo_sait_450_50_original.png"
        alt="redstore"
      ></img>
      <p>© 2018 - 2024, REDstore.am. Բոլոր իրավունքները պաշտպանված են</p>
      <div className={styles.cardSide}>
        <a href="https://arca.am">
          <img
            src="https://redstore.am/uploads/Payment-methods/arca.png"
            alt=""
          ></img>
        </a>
        <a href="https://maestrocard.com">
          <img
            src="https://redstore.am/uploads/Payment-methods/Maestro.png"
            alt=""
          ></img>
        </a>
        <a href="https://mastercard.com">
          <img
            src="https://redstore.am/uploads/Payment-methods/Master_Card.png"
            alt=""
          ></img>
        </a>
        <a href="https://visa.com">
          <img
            src="https://redstore.am/uploads/Payment-methods/Page-1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Bottom;
