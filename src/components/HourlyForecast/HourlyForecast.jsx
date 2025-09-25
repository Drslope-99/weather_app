import React from "react";
import styles from "./HourlyForecast.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import weatherIcon from "../../assets/image/overcast.png";

export default function HourlyForecast() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Hourly forecast</h2>
        <DropdownMenu title="--" />
      </div>
      <HourForcast />
    </section>
  );
}

function HourForcast() {
  return (
    <ul className={styles.forecastList}>
      <li className={styles.forecastItem}>
        <figure className={styles.forecastImage}>
          <img src={weatherIcon} alt="weather icon" />
        </figure>
        <time className={styles.forecastTime}>3PM</time>

        <span className={styles.forecastTemp}>
          17<sup>o</sup>
        </span>
      </li>
    </ul>
  );
}
