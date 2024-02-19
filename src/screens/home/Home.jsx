import Banner from "./homeComponents/header/banner.jsx";
import Nav from "./homeComponents/navbar/nav.jsx";
import Slide from "./homeComponents/slide/slide.jsx";
import Products from "./homeComponents/product_slide/products.jsx";
import Content from "./homeComponents/content/content.jsx";
import Footer from "./homeComponents/footer/Footer.jsx";
import { PopupControl } from "../../providers/popupControler.jsx";
import ToCart from "../../popups/toCart.jsx";
import React, { useContext } from "react";

function Home() {
  let { isOpen } = useContext(PopupControl);
  return (
    <div className="main">
      <Banner />
      <Nav />
      <Slide />
      <Products />
      <Content />
      {isOpen && <ToCart />}
      <Footer />
    </div>
  );
}

export default Home;
