
import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [registro, setRegistro] = useState("");
  function handleSubmit(e) {
    setRegistro("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (nombre.trim().length < 5) {
      setError("Complete your name");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Check your email");
      return;
    }
    setError("");
    setRegistro(`Thanks ${nombre}, we will contact you as soon as possible by mail`)
  }

  return (
      <div className={styles.contenedor}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
        <p>Send us your questions and we will contact you</p>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className={styles.button}> Send</button>
          {error && <p className={styles.error}>{error}</p>}
          {registro && <p>{registro}</p>}
        </form>
      </div>
  );
}

export default Contact;
