import styles from "./slide.module.css";
import { useEffect, useState } from "react";
import jsonImage from "./slide_images.json";

function Slide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = jsonImage.ref;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className={styles.contenier}>
      <img src={images[currentImageIndex]} alt={currentImageIndex + 1} />
    </div>
  );
}

export default Slide;
