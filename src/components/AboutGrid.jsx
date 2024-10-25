import styles from './AboutGrid.module.css';
import AboutCard from './AboutCard';

const AboutGrid = () => {
  const aboutItems = [
    {
      title: "Mission",
      description: "Info",
      image: "/src/assets/caramely-cookie_secundario_red.png",
      backgroundColor: "#FFA07A" 
    },
    {
      title: "Vision",
      description: "Info",
      image: "/src/assets/caramely-cookie_secundario_red.png",
      backgroundColor: "#FFB6C1" 
    },
    {
      title: "Values",
      description: "Info",
      image: "/src/assets/caramely-cookie_secundario_red.png",
      backgroundColor: "#FFB6C1" 
    },
    {
      title: "Value Proposition",
      description: "Info",
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