import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer>
       <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}></button>
      <div className={styles.div}>
        <img className={`${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo'/>
        <div className={`col-sm-12 col-lg-6 ${styles.icons}`}>
          <img src="/images/ico-facebook.png" alt="icon facebook" className={styles.icon}  />
          <img src="/images/ico-instagram.png" alt="icon instagram" className={styles.icon} />
          <img src="/images/ico-whatsapp.png" alt="icon whatsapp" className={styles.icon} />
          <img src="/images/ico-tiktok.png" alt="icon tiktok" className={styles.icon} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
