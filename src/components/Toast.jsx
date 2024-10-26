import React, { useState, useEffect } from "react";
import styles from "./Toast.module.css"; 

// eslint-disable-next-line react/prop-types
function Toast({ message, show, duration = 3000, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose(); 
      }, duration);
      return () => clearTimeout(timer); 
    }
  }, [show, duration, onClose]);

  return (
    <div className={`${styles.toast} ${show ? styles.show : ""}`}>
      <p>{message}</p>
    </div>
  );
}

export default Toast;
