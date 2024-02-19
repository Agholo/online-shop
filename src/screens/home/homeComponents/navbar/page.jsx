import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import HoverOpen from "./HoverOpen";

function Page({ path, name }) {
  return (
    <>
      <Link to={`/${path}`} className={style.link}>
        <div className={style.page}>
          <p>{name}</p>
        </div>
      </Link>
      {path === "categories" && <HoverOpen />}
    </>
  );
}

export default Page;
