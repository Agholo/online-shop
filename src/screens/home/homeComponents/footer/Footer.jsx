import styles from "./footer.module.css";
import Top from "./footerComps/top.jsx";
import Navigations from "./footerComps/navigations.jsx";
import Bottom from "./footerComps/bottom.jsx";

function Footer() {
  return (
    <div className={styles.main}>
      <Navigations />
      <Top />
      <Bottom />
    </div>
  );
}

export default Footer;
