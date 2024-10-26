import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import fbLogo from "../assets/logo-fb.svg";
import igLogo from "../assets/logo-ig.svg";
import whatsLogo from "../assets/logo-whats.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Toast from "../components/Toast";

function Contact() {
  const form = useRef();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        "service_3xddpbs",
        "template_wsldopk",
        emailParams,
        "TBLnMa6LBo2We53Jb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setToastMessage("Correo enviado exitosamente");
          setToastType("success");
          setShowToast(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setToastMessage("Error al enviar el correo, intenta nuevamente.");
          setToastType("error");
          setShowToast(true);
          setIsLoading(false);
        }
      );

    e.target.reset();
  };

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
        {isLoading && (
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            style={{ width: "100px", height: "100px" }} // Agregar 'px' a las unidades
          />
        )}

        <Form ref={form} onSubmit={sendEmail} className={styles.form}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter your number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            Submit
          </Button>
        </Form>
      </div>

      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
        type={toastType}
      />
    </div>
  );
}

export default Contact;
