import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadText}>Loading...</p>
    </div>
  );
}
