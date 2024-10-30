import React from "react";
import { Link } from "react-router-dom";
import fbLogo from "../assets/logo-fb.svg";
import igLogo from "../assets/logo-ig.svg";
import whatsLogo from "../assets/logo-whats.svg";

import styles from "./Footer.module.css";

function Footer() {
    const handleLogoClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
      };
return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/products" className={styles.link}>Products</Link>
          <Link to="/about" className={styles.link}>About Us</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.footerSocial}>
        <img
          src={fbLogo}
          className={styles.logo}
          alt="Facebook"
          onClick={() =>
            handleLogoClick("https://www.facebook.com/CaramelyCookieCR")
          }
        />
        <img
          src={igLogo}
          className={styles.logo}
          alt="Instagram"
          onClick={() =>
            handleLogoClick("https://www.instagram.com/caramelycookiecr/")
          }
        />
        <img
          src={whatsLogo}
          className={styles.logo}
          alt="WhatsApp"
          onClick={() => handleLogoClick("https://wa.me/c/50672934996")}
        />
        </div>

        <div className={styles.footerContact}>
          <p>© 2024 Caramely Cookie</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
