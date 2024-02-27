import { useState } from "react";
import icon from "./messenger.png";

function Message() {
  const [showPopup, setShow] = useState(false);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "#B31919",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "75px",
          width: "75px",
          right: "25px",
          borderRadius: "50%",
          boxShadow: "5px 5px 15px 5px rgba(34, 60, 80, 0.2)",
          bottom: "25px",
          cursor: "pointer",
        }}
        onClick={() => {
          setShow(!showPopup);
        }}
      >
        <img src={icon} alt=""></img>
      </div>
      <div
        style={{
          position: "fixed",
          right: "25px",
          bottom: "125px",
          height: "450px",
          width: "450px",
          borderRadius: "15px",
          backgroundColor: "white",
          border: "2px solid #B31919",
          boxShadow: "5px 5px 15px 5px rgba(34, 60, 80, 0.2)",
          padding: "25px",
          display: `${showPopup ? "block" : "none"}`,
        }}
      >
        <h1>Chat with REDstore</h1>
        <h3>Բարև Ձեզ,ինչով կարող եմ օգնել?</h3>
        <button
          style={{
            height: "75px",
            width: "450px",
            backgroundColor: "#B31919",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            fontSize: "20px",
            border: 0,
            letterSpacing: "1px",
            marginTop: "250px",
            cursor: "pointer",
          }}
        >
          Start chat
        </button>
      </div>
    </div>
  );
}

export default Message;
