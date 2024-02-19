import style from "./navbar.module.css";
import Page from "./page.jsx";

function Navigations() {
  return (
    <div className={style.contenier}>
      <div className={style.content}>
        <Page name="ՏԵՍԱԿԱՆԻ" path="categories" />
        <Page name="ՄԵՐ ՄԱՍԻՆ" path="about" />
        <Page name="ԱՊԱՌԻԿ" path="credit" />
        <Page name="ԿԱՊ" path="connect" />
        <Page name="ԱՌԱՔՈՒՄ և ՎՃԱՐՈՒՄ" path="sell" />
      </div>
    </div>
  );
}

export default Navigations;
