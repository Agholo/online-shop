import "../banner.css";
import cartSVG from "../../../../../svg/ci.svg";
import { PopupControl } from "./../../../../../providers/popupControler";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../../../providers/cartContext";

function Login(props) {
  let { setOpen } = useContext(PopupControl);
  let { itemsInCart } = useContext(cartContext);
  let [count, setCount] = useState(0);
  useEffect(() => {
    setCount(itemsInCart.length);
  }, [itemsInCart]);
  return (
    <div className="enter">
      {/* <img src={props.svg} alt="enter"></img>
      <p>Մուտք</p> */}
      <img
        src={cartSVG}
        alt=""
        style={{ marginLeft: "15px", marginRight: "5px" }}
        onClick={() => setOpen(true)}
      />
      <p>{count}</p>
    </div>
  );
}

export default Login;
