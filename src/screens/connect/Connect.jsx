import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import Footer from "../home/homeComponents/footer/Footer";
import { MapPin, AtSign, Phone } from "lucide-react";

const Connect = () => (
  <div>
    <Banner />
    <Nav />
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <div
        style={{
          backgroundColor: "white",
          minHeight: "calc(100vh - 160px)",
          width: "80%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 3fr",
          gap: "15px",
        }}
      >
        <div style={{ height: "100%" }}>
          <h1 style={{ marginLeft: "15px" }}>Կապ</h1>
          <h3 style={{ marginInline: "25px" }}>
            Մեր աշխատակիցները միշտ ուրախ կլինեն պատասխանել Ձեր բոլոր հարցերին։
          </h3>
          <br></br>
          <h3 style={{ margin: "25px" }}>Խորհրդակցեք հեռախոսով:</h3>
          <Phone color="#888888" style={{ marginLeft: "25px" }} />
          <span style={{ fontSize: "22px", marginLeft: "10px" }}>
            011-703-703
          </span>
          <h3 style={{ margin: "25px" }}>Կապ մեզ հետ:</h3>
          <AtSign color="#888888" style={{ marginLeft: "25px" }} />
          <span style={{ fontSize: "22px", marginLeft: "10px" }}>
            example@gmail.com
          </span>
          <h3 style={{ marginInline: "25px" }}>Մեր հասցեն:</h3>
          <MapPin color="#888888" style={{ marginLeft: "25px" }} />
          <span style={{ fontSize: "22px", marginLeft: "10px" }}>
            19 Աբովյան, Երևան
          </span>
          <br></br>
          <MapPin color="#888888" style={{ marginLeft: "25px" }} />
          <span style={{ fontSize: "22px", marginLeft: "10px" }}>
            22 Սայաթ-Նովա, Երևան
          </span>
          <br></br>
          <MapPin color="#888888" style={{ marginLeft: "25px" }} />
          <span style={{ fontSize: "22px", marginLeft: "10px" }}>
            1/98 Հանրապետության, Աբովյան
          </span>
        </div>
        <div style={{ height: "100%" }}>
          <div
            style={{
              backgroundColor: "white",
              height: "27%",
              marginBottom: "45px",
              boxShadow: "0px 10px 10px 0px rgba(34, 60, 80, 0.2)",
            }}
          >
            <img
              src="https://redstore.am/uploads/Shops/redstorePrimeShop.jpg"
              alt=""
              style={{ width: "100%" }}
            ></img>
            <p>Երևան, Աբովյան 19, REDstore Prime</p>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "27%",
              marginBottom: "45px",
              boxShadow: "0px 10px 10px 0px rgba(34, 60, 80, 0.2)",
            }}
          >
            <img
              src="https://redstore.am/uploads/Shops/store_redstore_yerevan-min.png"
              alt=""
              style={{ width: "100%" }}
            ></img>
            <p>Երևան,Սայաթ-Նովա 22, REDstore</p>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "27%",
              marginBottom: "45px",
              boxShadow: "0px 10px 10px 0px rgba(34, 60, 80, 0.2)",
            }}
          >
            <img
              src="https://redstore.am/uploads/Shops/store_redstore_abovyan-min.png"
              alt=""
              style={{ width: "100%" }}
            ></img>
            <p>Աբովյան, Հանրապետության 1/98</p>
          </div>
        </div>
        <div style={{ height: "100%", backgroundColor: "red" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.042919915777!2d44.512505675875666!3d40.18585827147768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce217b8839d%3A0x80bc65ebce1f70f!2sArmenian%20National%20Opera%20and%20Ballet%20Theatre!5e0!3m2!1sen!2sam!4v1709469062038!5m2!1sen!2sam"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="opera"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Connect;
