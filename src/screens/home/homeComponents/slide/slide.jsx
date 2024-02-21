import styles from "./slide.module.css";
import { useEffect, useState } from "react";
import jsonImage from "./slide_images.json";

function Slide() {
  const images = jsonImage.ref;
  const [position, setPosition] = useState(0);
  const [trans, setTrans] = useState(500);
  const [imageComponent, setImageComponent] = useState(
    images.map((image, index) => <img key={index} src={image} alt="" />)
  );

  useEffect(() => {
    let intervalId = setInterval(() => {
      setPosition(100);
      setTimeout(() => {
        setTrans(0);
        images.push(images.shift());
        setPosition(0);
        setImageComponent(
          images.map((image, index) => <img key={index} src={image} alt="" />)
        );
      }, 500);
      setTrans(500);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);
  return (
    <div className={styles.contenier}>
      <div
        style={{
          transform: `translateX(-${position}%)`,
          display: "flex",
          height: "100%",
          width: "100%",
          transition: `all ${trans}ms ease-in-out`,
        }}
      >
        {imageComponent}
      </div>
    </div>
  );
}

export default Slide;
