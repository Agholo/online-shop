import "../banner.css";

const Search = (props) => {
  return (
    <div className="inputCont">
      <input type="search" className="search"></input>
      <img src={props.svg} alt="search" />
    </div>
  );
};

export default Search;
