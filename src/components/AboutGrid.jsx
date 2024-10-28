import styles from './AboutGrid.module.css';
import AboutCard from './AboutCard';

const AboutGrid = () => {
  const aboutItems = [
    {
      title: "Mission",
      description: "Bringing smiles to people's faces with delicious, high-quality products.",
      image: "/src/assets/caramely-cookie_secundario_red.png",
      backgroundColor: "#FFA07A" 
    },
    {
      title: "Vision",
      description: "To be the preferred choice for fresh baked cookies and cookie desserts nationwide.",
      image: "/src/assets/caramely-cookie_secundario_red.png",
      backgroundColor: "#FFB6C1" 
    },
    {
      title: "Values",
      description: "We use premium, local and fresh ingredients, along with sustainable packaging, to create the highest quality cookies.",
      image: "/src/assets/caramely-cookie_secundario_red.png",
      backgroundColor: "#FFB6C1"
    },
    {
      title: "Value Proposition",
      description: "Premium Ingredients, Addictive Cookies.",
      image: "/src/assets/caramely-cookie_secundario_red.png",
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