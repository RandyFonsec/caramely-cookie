import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Name of the cookie",
      description: "Info",
      image: "/src/assets/cookie-image.png"
    },
    {
      id: 2,
      name: "Name of the cookie",
      description: "Info",
      image: "/src/assets/cookie-image.png"
    },
    {
      id: 3,
      name: "Name of the cookie",
      description: "Info",
      image: "/src/assets/cookie-image.png"
    },
    {
      id: 4,
      name: "Name of the cookie",
      description: "Info",
      image: "/src/assets/cookie-image.png"
    }
  ]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.header}>
        <h2>Our Products</h2>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;