import { useState } from "react";
import icon from "./messenger.png";

function Message() {
  const [showPopup, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  function popupwindow(url, title, w, h) {
    var left = window.innerWidth / 2 - w;
    var top = window.innerHeight / 2 - 0.66 * h;
    return window.open(
      url,
      title,
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        top +
        ", left=" +
        left
    );
  }
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
          setOpen(false);
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
          backgroundColor: `${isOpen ? "#CCCCCC" : "white"}`,
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
            marginTop: "240px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!isOpen)}
        >
          Start chat
        </button>
        {isOpen && (
          <div
            style={{
              height: "20%",
              width: "502px",
              borderRadius: "10px",
              backgroundColor: "white",
              position: "fixed",
              bottom: "125px",
              right: "25px",
              textAlign: "center",
            }}
          >
            <h1>Log in</h1>
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
                marginTop: "240px",
                cursor: "pointer",
                position: "relative",
                bottom: "200px",
                marginLeft: "25px",
              }}
              onClick={() => {
                setOpen(!isOpen);
                popupwindow(
                  "https://www.messenger.com/",
                  "messanger",
                  500,
                  450
                );
              }}
            >
              Use Messanger
            </button>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={icon}
            alt=""
            style={{ height: "25px", width: "25px", marginInline: "5px" }}
          ></img>
          <p>Powered by Messenger</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
