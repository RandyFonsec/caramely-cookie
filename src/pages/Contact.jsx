import React from "react";
import styles from "./Contact.module.css";
import fbLogo from "../assets/logo-fb.svg";
import igLogo from "../assets/logo-ig.svg";
import whatsLogo from "../assets/logo-whats.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  const handleLogoClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h2 className="fs-1 fw-bold">Connect with us</h2>
      </div>

      <div className={styles.socialMedia}>
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

      <div className={styles.formDiv}>
        <h3 className="mb-5">Send us a message:</h3>
        <Form className={styles.form}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Enter your number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
