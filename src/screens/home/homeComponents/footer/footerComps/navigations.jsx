import styles from "../footer.module.css";
import facebookIcon from "../../../../../svg/facebook.svg";
import instagramIcon from "../../../../../svg/instagram.svg";
import messangerIcon from "../../../../../svg/messanger.svg";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <div className={styles.nav}>
      <div
        style={{
          height: "100%",
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.socialMedia}>
          <p>Միացե՛ք մեզ՝</p>
          <a href="https://facebook.com/">
            <img src={facebookIcon} alt=""></img>
          </a>
          <a href="https://instagram.com/">
            <img src={instagramIcon} alt=""></img>
          </a>
          <a href="https://www.messenger.com/">
            <img src={messangerIcon} alt=""></img>
          </a>
        </div>
        <div className={styles.navigationSide}>
          <Link to="/about">Մեր մասին</Link>
          <Link to="/credit">Ապառիկ</Link>
          <Link to="/connect">Կապ</Link>
          <Link to="/credit">Առաքում և Վճարում</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigations;
