import style from "./navbar.module.css";
import { Link } from "react-router-dom";

function Page(props) {
  return (
    <Link to={`/${props.path}`} className={style.link}>
      <div className={style.page}>
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default Page;
