import styles from './AboutGrid.module.css';
import AboutCard from './AboutCard';
import logo from "../assets/caramely-cookie_secundario_red.png";

const AboutGrid = () => {
  const aboutItems = [
    {
      title: "Mission",
      description: "Bringing joy to our customers with cookies crafted from the finest ingredients for a taste you won’t forget.",
      image: logo,
      backgroundColor: "#FFA07A" 
    },
    {
      title: "Vision",
      description: "To become the top choice for freshly baked cookies and dessert experiences across the nation.",
      image: logo,
      backgroundColor: "#FFB6C1" 
    },
    {
      title: "Values",
      description: "We prioritize quality, using local, premium ingredients and sustainable packaging to craft cookies with integrity and excellence.",
      image: logo,
      backgroundColor: "#FFB6C1"
    },
    {
      title: "Value Proposition",
      description: "Irresistible cookies made with premium ingredients for a treat that’s simply unforgettable.",
      image: logo,
      backgroundColor: "#FFA07A"
    }
  ];

  return (
    <div className={styles.grid}>
      {aboutItems.map((item, index) => (
        <AboutCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </div>
  );
};

export default AboutGrid;