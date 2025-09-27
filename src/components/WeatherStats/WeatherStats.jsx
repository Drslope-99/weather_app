import React from "react";
import styles from "./WeatherStats.module.css";

export default function WeatherStats({ title, stat, unit }) {
  return (
    <div className={styles.weatherStat}>
      <h3 className={styles.statTitle}>{title}</h3>
      <p className={styles.statUnit}>
        {Math.round(stat)}
        <span>{unit}</span>
      </p>
    </div>
  );
}
