import "./banner.css";
import Logo from "./headerComponenets/logo.jsx";
import Search from "./headerComponenets/search.jsx";
import Login from "./headerComponenets/login.jsx";
import searchSVG from "./../../../../svg/search.svg";
import userSVG from "./../../../../svg/user.svg";
import { useContext, useEffect, useState } from "react";
import { PopupControl } from "../../../../providers/popupControler.jsx";
import ToCart from "../../../../popups/toCart.jsx";
import Message from "./headerComponenets/message.jsx";

function Banner() {
  let { isOpen } = useContext(PopupControl);
  const [showMessage, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000);
  }, []);
  return (
    <header className="banner">
      <div className="contenier">
        <Logo />
        <Search svg={searchSVG} />
      </div>
      <Login svg={userSVG} />
      {isOpen && <ToCart />}
      {showMessage && <Message />}
    </header>
  );
}

export default Banner;
