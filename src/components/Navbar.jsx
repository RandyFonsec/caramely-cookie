import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className = {styles.rectangle}></div>
        <Link to="/" className= {styles.logo}>
          <div className={styles.backgroundImage}></div>
        </Link>

        <a className= {styles.linkButton} href="/products">Products</a>
        <a className= {styles.linkButton} href="/about">About Us</a>
        <a className= {styles.linkButton} href="/contact">Contact</a>
      </nav>
    </>
  );
}

export default Navbar;
