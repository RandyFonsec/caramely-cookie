import styles from './AboutGrid.module.css';
import AboutCard from './AboutCard';
import logo from "../assets/caramely-cookie_secundario_red.png";

const AboutGrid = () => {
  const aboutItems = [
    {
      title: "About us",
      description: "Caramely Cookie was born in 2021, the fruit of the desire of two friends, Michelle Felser and Elky Mug, to own their own business. After many brainstorming sessions, they realized that what they really wanted was to build a company that would make people smile, inspired by the flavors of childhood. With a recipe in mind to create high-quality cookies that evoke fond memories, they began experimenting in Michelle's kitchen. From the beginning, their cookies were more than just a dessert; they were an experience, a moment to transport yourself back in time. They knew that their project would fill a void in Costa Rica: a cookie shop that offers fresh, homemade cookies made with local and natural ingredients, and they decided to share that magic.",
      image: logo,
      backgroundColor: "#FFA07A",
      fullWidth: true
    },
    {
      title: "Mission",
      description: "Bringing joy to our customers with cookies crafted from the finest ingredients for a taste you won't forget.",
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
      description: "Irresistible cookies made with premium ingredients for a treat that's simply unforgettable.",
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
          className={item.fullWidth ? styles.fullWidth : ''}
        />
      ))}
    </div>
  );
};

export default AboutGrid;