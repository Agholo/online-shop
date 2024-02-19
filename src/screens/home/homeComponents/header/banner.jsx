import "./banner.css";
import Logo from "./headerComponenets/logo.jsx";
import Search from "./headerComponenets/search.jsx";
import Login from "./headerComponenets/login.jsx";
import searchSVG from "./../../../../svg/search.svg";
import userSVG from "./../../../../svg/user.svg";

function Banner() {
  return (
    <header className="banner">
      <div className="contenier">
        <Logo />
        <Search svg={searchSVG} />
      </div>
      <Login svg={userSVG} />
    </header>
  );
}

export default Banner;
