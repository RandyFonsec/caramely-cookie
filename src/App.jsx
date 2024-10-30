import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Importa el Footer
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.body}>
      <Router>
        <div>
          <Navbar className={styles.navbar} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
