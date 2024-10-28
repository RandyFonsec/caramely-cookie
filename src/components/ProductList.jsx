import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Carrot Cake",
      description: "Spiced carrot, with walnuts and cream cheese frosting",
      image: "/src/assets/cookie1.png"
    },
    {
      id: 2,
      name: "Chocolate Chip",
      description: "Our Chocolate Chip will please your inner sweet tooth",
      image: "/src/assets/cookie2.png"
    },
    {
      id: 3,
      name: "Lemon Crinkle",
      description: "Butter and lemon, wrapped in sugar clouds",
      image: "/src/assets/cookie3.png"
    },
    {
      id: 4,
      name: "Red Velvet Crinkle",
      description: "Decadent Red Velvet filled with white chocolate",
      image: "/src/assets/cookie4.png"
    },
    {
      id: 5,
      name: "Sea Salt Toffee",
      description: "Chocolate Chip with buttercream and our buttery toffee",
      image: "/src/assets/cookie5.png"
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