import "../banner.css"; 
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const [value, setValue] = useState("");
  const ref = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (ref.current.value.trim() !== "") {
      navigate(`/categories/category/search?q=${ref.current.value}`);
    }
  };
  return (
    <div className="inputCont">
      <input
        type="search"
        className="search"
        value={value}
        ref={ref}
        onInput={() => setValue(ref.current.value)}
        onKeyDown={
          (event) => {
            if(event.key === "Enter") {
              handleSearch()
            }
          }
        }
      ></input>
      <img src={props.svg} alt="search" />
    </div>
  );
};

export default Search;
