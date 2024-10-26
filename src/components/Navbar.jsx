import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const mobileMenuRef = useRef(null); // Referencia para el menú móvil

  // Cierra el menú si se hace clic fuera del menú móvil
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShow(false); // Cierra el menú si el clic es fuera del menú
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el event listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.rectangle}></div>
        <Link to="/" className={styles.logo}>
          <div className={styles.backgroundImage}></div>
        </Link>

        <div className={styles.desktop}>
          <a className={styles.linkButton} href="/products">Products</a>
          <a className={styles.linkButton} href="/about">About Us</a>
          <a className={styles.linkButton} href="/contact">Contact</a>
        </div>

        <div className={styles.mobile}>
          {!show && <button className={styles.hamburgerButton} onClick={() => setShow(true)}>☰</button>}
        </div>

        {/* Menu Móvil */}
        <div ref={mobileMenuRef} className={`${styles.mobileMenu} ${show ? styles.show : ''}`}>
          <button className={styles.hamburgerButton} onClick={() => setShow(false)}>X</button>
          <Link to="/products" className={styles.linkButton}>Products</Link>
          <Link to="/about" className={styles.linkButton}>About Us</Link>
          <Link to="/contact" className={styles.linkButton}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
