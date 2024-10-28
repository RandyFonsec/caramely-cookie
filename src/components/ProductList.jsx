import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import cookie1 from "../assets/cookie1.png";
import cookie2 from "../assets/cookie2.png";
import cookie3 from "../assets/cookie3.png";
import cookie4 from "../assets/cookie4.png";
import cookie5 from "../assets/cookie5.png";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Carrot Cake",
      description: "Spiced carrot, with walnuts and cream cheese frosting",
      image: cookie1
    },
    {
      id: 2,
      name: "Chocolate Chip",
      description: "Our Chocolate Chip will please your inner sweet tooth",
      image: cookie2
    },
    {
      id: 3,
      name: "Lemon Crinkle",
      description: "Butter and lemon, wrapped in sugar clouds",
      image: cookie3
    },
    {
      id: 4,
      name: "Red Velvet Crinkle",
      description: "Decadent Red Velvet filled with white chocolate",
      image: cookie4
    },
    {
      id: 5,
      name: "Sea Salt Toffee",
      description: "Chocolate Chip with buttercream and our buttery toffee",
      image: cookie5
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