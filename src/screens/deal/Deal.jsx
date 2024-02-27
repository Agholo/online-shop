import { useContext, useEffect, useState } from "react";
import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import Footer from "./../home/homeComponents/footer/Footer";
import styles from "./deal.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { cartContext } from "../../providers/cartContext";

function Deal() {
  const [recaptchaToken, setRecaptchaToken] = useState();
  const [isHidden, setHidden] = useState(true);
  const [isOpenTextarea, setOpenTextarea] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsInCart, changeItems } = useContext(cartContext);
  useEffect(() => {
    let price = itemsInCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(price);
  }, [itemsInCart]);

  function recaptchaHandle(token) {
    setRecaptchaToken(token);
    console.log(recaptchaToken);
  }

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Banner />
      <Nav />
      <h1 style={{ marginLeft: "225px" }}>Պատվերի ձևակերպում</h1>
      <div className={styles.contenier}>
        <div className={styles.inputSide}>
          <div className={styles.labelCont}>
            <label for="nameSurname">
              Անուն Ազգանուն<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <input id="nameSurname"></input>
          <br></br>
          <div className={styles.labelCont}>
            <label for="phone">
              Հեռախոսի համար<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <input id="phone"></input>
          <span
            style={{
              fontSize: "21px",
              cursor: "pointer",
              marginLeft: "5px",
              color: "blue",
              fontWeight: "700",
            }}
            onClick={() => {
              setHidden(!isHidden);
            }}
          >
            +
          </span>
          <input
            id="hiddenPhone"
            style={{
              marginLeft: "225px",
              display: `${isHidden ? "none" : "block"}`,
            }}
          ></input>
          <br></br>
          <div className={styles.labelCont}>
            <label for="email">
              Էլ․ հասցե<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <input id="email"></input>
          <br></br>
          <div className={styles.labelCont}>
            <label for="sec">
              Բնակավայր<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <select>
            <option selected disabled>
              Ընտրեք առաքման վայրը
            </option>
            <option>Արագածոտն</option>
            <option>Արարատ</option>
            <option>Արմավիր</option>
            <option>Գեղարքունիք</option>
            <option>Կոտայք</option>
            <option>Լոռի</option>
            <option>Շիրակ</option>
            <option>Սյունիք</option>
            <option>Տավուշ</option>
            <option>Վայոց ձոր</option>
            <option>Երևան</option>
          </select>
          <br></br>
          <div className={styles.labelCont}>
            <label for="address">
              Առաքման հասցեն<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <input id="address" placeholder="Հասցե"></input>
          <p
            style={{ color: "blue", cursor: "pointer", marginLeft: "225px" }}
            onClick={() => {
              setOpenTextarea(!isOpenTextarea);
            }}
          >
            Ավելացնել մեկնաբանություն՝ պատվերին
          </p>
          <textarea
            style={{
              display: `${isOpenTextarea ? "block" : "none"}`,
              marginLeft: "225px",
            }}
          ></textarea>
          <div
            style={{
              display: "flex",
              width: "450px",
              marginLeft: "225px",
            }}
          >
            <input type="checkbox" style={{ margin: 0, width: "25px" }}></input>
            <p style={{ marginLeft: "15px" }}>
              Համաձայն եմ <Link to={"/sell"}>պայմաններին և դրույթներին</Link>
            </p>
          </div>
          <ReCAPTCHA
            sitekey="6Le_pnspAAAAADnJK5dMVnbJZ4KGB5GtUIJl_zaD"
            onChange={recaptchaHandle}
            style={{ marginTop: "25px", marginLeft: "225px" }}
          />
          <button className={styles.submit}>Հաստատել Պատվերը</button>
        </div>
        <div className={styles.cartSide}>
          <div className={styles.head}>
            <p>Ապրանք</p>
            <p className={styles.up}>ԻՄ ՊԱՏՎԵՐԸ</p>
            <p>Արժեքը</p>
          </div>

          <div className={styles.productSide}>
            {itemsInCart.map((item, index) => {
              return (
                <div className={styles.product}>
                  <span
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      changeItems(itemsInCart.filter((_, i) => i !== index));
                    }}
                  >
                    X
                  </span>
                  <img src={`https://redstore.am${item.src}`} alt=""></img>
                  <h4>{item.name}</h4>
                  <h3 style={{ position: "absolute", right: "50px" }}>
                    {item.price} AMD
                  </h3>
                </div>
              );
            })}
          </div>
          <div className={styles.priceSide}>
            <p style={{ fontSize: "24px" }}>Ենթակա է վճարման</p>
            <p>{totalPrice} AMD</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Deal;
