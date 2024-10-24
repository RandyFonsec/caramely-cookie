import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.body}>
    <Router>
      <div>
        <Navbar className={styles.navbar} />
      
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>
        <div className={styles.rect}></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
