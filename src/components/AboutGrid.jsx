import styles from './AboutGrid.module.css';
import AboutCard from './AboutCard';
import logo from "../assets/caramely-cookie_secundario_red.png";

const AboutGrid = () => {
  const aboutItems = [
    {
      title: "Mission",
      description: "Bringing smiles to people's faces with delicious, high-quality products.",
      image: logo,
      backgroundColor: "#FFA07A" 
    },
    {
      title: "Vision",
      description: "To be the preferred choice for fresh baked cookies and cookie desserts nationwide.",
      image: logo,
      backgroundColor: "#FFB6C1" 
    },
    {
      title: "Values",
      description: "We use premium, local and fresh ingredients, along with sustainable packaging, to create the highest quality cookies.",
      image: logo,
      backgroundColor: "#FFB6C1"
    },
    {
      title: "Value Proposition",
      description: "Premium Ingredients, Addictive Cookies.",
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