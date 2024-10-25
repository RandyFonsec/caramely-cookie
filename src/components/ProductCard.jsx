import styles from './ProductCard.module.css';

const ProductCard = ({ name, description, image }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;