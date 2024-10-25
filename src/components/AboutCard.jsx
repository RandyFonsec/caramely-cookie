import styles from './AboutCard.module.css';

const AboutCard = ({ title, description, image, backgroundColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AboutCard;