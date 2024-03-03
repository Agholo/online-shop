import { useLocation } from "react-router-dom";
import Goods from "./../home/homeComponents/content/goods";
import { useEffect, useState } from "react";
import catalogJson from "../../catalog.json";
import Nav from "../home/homeComponents/navbar/nav";
import Banner from "./../home/homeComponents/header/banner";
import Footer from "./../home/homeComponents/footer/Footer";

function Result() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [finded, setFinded] = useState([]);
  useEffect(() => {
    const tmp = catalogJson.catalog.filter((product) => {
      return product.name.includes(query) || product.brend.includes(query);
    });
    setFinded(tmp);
  }, [query]);
  console.log(finded);
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Banner />
      <Nav />
      <div
        style={{
          margin: "auto",
          minHeight: "calc(100vh - 60px)",
          width: "80%",
          backgroundColor: "white",
          display: "grid",
          gap: "35px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          placeItems: "center",
        }}
      >
        {finded.map((product, key) => {
          return <Goods item={product} key={key} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Result;
