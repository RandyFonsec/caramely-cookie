import React from "react";
import styles from "./Home.module.css";
import Image from "react-bootstrap/Image";
import image1 from "../assets/recorte2-01.png";
import image2 from "../assets/recorte1-01.png";
import Carousel from "react-bootstrap/Carousel";
import carr1 from "../assets/carr1.png";
import carr2 from "../assets/carr2.png";
import carr3 from "../assets/carr3.png";
import carr4 from "../assets/carr4.png";
import carr5 from "../assets/carr5.png";

function Home() {
  const images = [carr1, carr2, carr3, carr4, carr5];
  return (
    <div className={styles.body}>
      <div className={styles.backgroundImage}>
        <div className={styles.cookieCard}>
          <p>REAL INGREDIENTS THAT MELT IN YOUR MOUTH</p>
        </div>
      </div>

      <div className={styles.frameContainer}>
        <img className={styles.imageTopLeft} src={image1} alt="Top Left" />

        <p className={styles.infoText}>
          Caramely Cookie offers an uncommon, smile-inducing experience. Our
          vision is to offer new flavors with high quality, fresh baked cookies,
          year round, at a fair price using the most natural and premium
          ingredients. Our mission is to bring our unique recipes to you.
        </p>

        <img
          className={styles.imageBottomRight}
          src={image2}
          alt="Bottom Right"
        />
      </div>

      <div className={styles.carrouselDiv}>
        <h2 className="mb-5 fs-1 fw-bold">Some of our cookies:</h2>
        <Carousel>
          {images.map((url, index) => (
            <Carousel.Item key={index}>
              <Image thumbnail className = {styles.carrouselImage} src={url} fluid/>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
