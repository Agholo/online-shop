import Banner from "../home/homeComponents/header/banner";
import Nav from "../home/homeComponents/navbar/nav";
import Footer from "../home/homeComponents/footer/Footer";
import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Banner />
    <Nav />
    <div style={{ width: "80%", margin: "auto", backgroundColor: "white" }}>
      <h1 style={{ marginInline: "25px" }}>Մեր մասին</h1>
      <h3 style={{ marginInline: "60px", lineHeight: "50px" }}>
        ''REDstore խանութ-սրահն իր գործունեությունը սկսել է 2011 թվականից
        Աբովյան քաղաքում։ 2018 թ.-ի դեկտեմբերի 3-ին խանութ-սրահն իր
        գործունեությունը վերսկսեց առավել ընդարձակ տարածքում՝ ք. Երևան,
        Սայաթ-Նովա 22 հասցեում, իսկ արդեն 2023 թվականին նոր և բարձրակարգ
        սպասարկման նպատակով իր դռներն է բացում թվով 3-րդ մասնաճյուղը՝ REDstore
        Prime-ը` Աբովյան 19 հասցեում։ Ավելի քան 10 տարվա պատմություն ունեցող
        REDstore-ն առաջարկում է որակյալ թվային և կենցաղային տեխնիկայի լայն
        տեսականի՝ շահավետ արժեքներով։
      </h3>
      <h3 style={{ margin: "60px", lineHeight: "50px" }}>
        Համագործակցելով ՀՀ առաջատար բոլոր բանկերի հետ՝ առաջարկում ենք ապառիկի
        լավագույն պայմանները մեր սիրելի հաճախորդներին։
      </h3>
      <h3 style={{ marginInline: "60px" }}>
        Խանութ-սրահները համագործակցում են Հայաստանյան բոլոր առաջատար բանկերի
        հետ, որոնք ունեն ապառիկ համագործակցություն և առաջարկում են{" "}
        <Link to={"/credit"}>ապառիկի հատուկ պայմաններ։</Link>
      </h3>
      <img
        src="https://redstore.am/uploads/SitePagesPictures/c.png"
        alt=""
        style={{
          marginBlock: "35px",
          marginInline: "60px",
          width: "calc(100% - 120px)",
        }}
      ></img>
      <h3 style={{ marginInline: "60px", lineHeight: "40px" }}>
        Մեր խանութ-սրահում գործում է մասնագիտացված սպասարկման կենտրոնը,որտեղ
        կատարվում է` նոթբուքների, հեռախոսների, պլանշետների բարձրակարգ
        սպասարկում:
      </h3>
      <h3 style={{ margin: "60px" }}>Սիրով կսպասենք Ձեզ։</h3>
    </div>
    <Footer />
  </div>
);

export default About;
