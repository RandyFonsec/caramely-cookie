import styles from './AboutCard.module.css';

const AboutCard = ({ title, description, image, backgroundColor, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`} style={{ backgroundColor }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;