import "./banner.css";
import Logo from "./headerComponenets/logo.jsx";
import Search from "./headerComponenets/search.jsx";
import Login from "./headerComponenets/login.jsx";
import searchSVG from "./../../../../svg/search.svg";
import userSVG from "./../../../../svg/user.svg";
import { useContext } from "react";
import { PopupControl } from "../../../../providers/popupControler.jsx";
import ToCart from "../../../../popups/toCart.jsx";

function Banner() {
  let { isOpen } = useContext(PopupControl);
  return (
    <header className="banner">
      <div className="contenier">
        <Logo />
        <Search svg={searchSVG} />
      </div>
      <Login svg={userSVG} />
      {isOpen && <ToCart />}
    </header>
  );
}

export default Banner;
