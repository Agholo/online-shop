import Banner from "./homeComponents/header/banner.jsx";
import Nav from "./homeComponents/navbar/nav.jsx";
import Slide from "./homeComponents/slide/slide.jsx";
import Products from "./homeComponents/product_slide/products.jsx";
import Content from "./homeComponents/content/content.jsx";
import Footer from "./homeComponents/footer/Footer.jsx";
import React from "react";

function Home() {
  return (
    <div className="main">
      <Banner />
      <Nav />
      <Slide />
      <Products />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
