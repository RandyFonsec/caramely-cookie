import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Cargar el archivo CSV
        const response = await fetch('/products.csv');
        const csvText = await response.text();
        
        // Convertir CSV a array de productos
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        
        const productsData = lines.slice(1).map(line => {
          const values = line.split(',');
          const product = {};
          
          headers.forEach((header, index) => {
            product[header.trim()] = values[index].trim();
          });
          
          // Importar la imagen dinámicamente
          product.image = new URL(
            `../assets/${product.imageFile}`, 
            import.meta.url
          ).href;
          
          return product;
        });

        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

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