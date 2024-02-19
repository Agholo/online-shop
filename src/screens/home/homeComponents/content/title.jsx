function Title({ text }) {
  const cont = {
    width: "calc(100% - 30px)",
    height: "60px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    fontSize: "25px",
    marginBlock: "15px",
    paddingLeft: "15px",
  };
  return <div style={cont}>{text}</div>;
}

export default Title;
