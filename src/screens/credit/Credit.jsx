import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import Footer from "../home/homeComponents/footer/Footer";
import { Link } from "react-router-dom";

const Credit = () => (
  <div style={{ backgroundColor: "#f2f2f2" }}>
    <Banner />
    <Nav />
    <div style={{ width: "80%", margin: "auto", backgroundColor: "white" }}>
      <h1 style={{ marginInline: "25px" }}>Ապառիկ</h1>
      <ul style={{ marginInline: "60px", fontSize: "18px" }}>
        <h3>Ապառիկի Պայմաններ՝</h3>
        <li style={{ listStyle: "square", marginInline: "40px" }}>
          Ձևակերպվում է տեղում 5-15 րոպեների ընթացքում{" "}
        </li>
        <li style={{ listStyle: "square", marginInline: "40px" }}>
          Հաճախորդը պետք է ներկայացնի անձնագիր և սոցիալական քարտ կամ
          նույնականացման քարտ(ID քարտ)
        </li>
        <li style={{ listStyle: "square", marginInline: "40px" }}>
          Տրամադրվում է 18-70 տարեկան անձանց
        </li>
        <li style={{ listStyle: "square", marginInline: "40px" }}>
          Տրամադրվում է ՀՀ բոլոր մարզերի քաղաքացիներին և ԼՂՀ բնակիչներին
        </li>
        <li style={{ listStyle: "square", marginInline: "40px" }}>
          Պետք է ունենալ դրական վարկային պատմություն կամ լինել գրանցված աշխատող
        </li>
        <li style={{ listStyle: "square", marginInline: "40px" }}>
          Ապառիկը ձևակերպում ենք շաբաթվա բոլոր օրերին՝ երկուշաբթի-շաբաթ օրերին
          ժամը 10:00-20:00-ն, կիրակի՝ ժամը 11:00-19:00-ն։
        </li>
      </ul>
      <div
        style={{
          marginInline: "60px",
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "1fr 1fr 1fr",
          textAlign: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
          }}
        >
          <h2>Տարեկան տոկոսադրույքը</h2>
          <h1 style={{ color: "red", margin: "0" }}>սկսած 0% -ից</h1>
        </div>
        <div style={{ border: "1px solid #DDDDDD", height: "160px" }}>
          <h2>Կանխավճար</h2>
          <h1 style={{ color: "red", margin: "0" }}>սկսած 0% -ից</h1>
        </div>
        <div style={{ border: "1px solid #DDDDDD", height: "160px" }}>
          <h2>Կանխավճար</h2>
          <h1 style={{ color: "red", margin: "0" }}>0,95% -ից</h1>
        </div>
      </div>
      <h3 style={{ marginInline: "60px" }}>
        REDstore խանութ - սրահների ցանցը համագործակցում է Հայաստանյան բոլոր
        առաջատար բանկերի հետ:
      </h3>
      <div
        style={{
          marginInline: "60px",
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://redstore.am/uploads/SitePagesPictures/ineco.png"
            alt=""
          ></img>
        </div>
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://redstore.am/uploads/SitePagesPictures/Ameria.png"
            alt=""
          ></img>
        </div>
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://redstore.am/uploads/SitePagesPictures/AEB.png"
            alt=""
          ></img>
        </div>
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://redstore.am/uploads/SitePagesPictures/VTB.png"
            alt=""
          ></img>
        </div>
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://redstore.am/uploads/SitePagesPictures/UNi.png"
            alt=""
          ></img>
        </div>
        <div
          style={{
            border: "1px solid #DDDDDD",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://redstore.am/uploads/SitePagesPictures/Acba.png"
            alt=""
          ></img>
        </div>
      </div>
      <h3 style={{ marginInline: "60px" }}>
        Ապառիկի մասին ավելի մանրամասն իմանալու համար{" "}
        <Link to={"/connect"}>մոտեցեք</Link> խանութ - սրահներ կամ{" "}
        <Link to={"/connect"}>զանգահարեք</Link>։
      </h3>
    </div>
    <Footer />
  </div>
);

export default Credit;
