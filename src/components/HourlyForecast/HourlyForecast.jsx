import React from "react";
import styles from "./HourlyForecast.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import weatherIcon from "../../assets/image/overcast.png";

function formatHour(isoString) {
  const date = new Date(isoString);

  // local hour in 12-hour format with AM/PM
  return date.toLocaleTimeString([], {
    hour: "numeric",
    hour12: true,
  });
}

export default function HourlyForecast({ data, isLoading }) {
  let hourlyData = data?.hourly?.time;

  // const times = hourlyData?.map((time) => formatHour(time));
  console.log(hourlyData);

  const hour = new Date(new Date().toISOString()).getHours();
  console.log(hour);
  console.log(new Date().toISOString());

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

      {/* <SkimmishLoader /> */}
    </ul>
  );
}

function SkimmishLoader() {
  return Array.from({ length: 7 }, (_, i) => (
    <li className={styles.itemLoader} key={i}></li>
  ));
}
