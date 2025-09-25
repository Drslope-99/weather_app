import React from "react";
import styles from "./WeatherStats.module.css";

export default function WeatherStats({ title }) {
  return (
    <div className={styles.weatherStat}>
      <h3 className={styles.statTitle}>{title}</h3>
      <p className={styles.statUnit}>
        18<sup>o</sup>
      </p>
    </div>
  );
}
