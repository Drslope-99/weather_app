import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/image/logo.png";

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="/" className={styles.logoContainer}>
          <img src={Logo} alt="logo" />
        </a>
        {children}
      </nav>
    </header>
  );
}
