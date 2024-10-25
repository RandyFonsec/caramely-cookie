import ProductList from '../components/ProductList';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.productsPage}>
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.contentContainer}>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;