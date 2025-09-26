import React from "react";
import styles from "./WeatherLayout.module.css";
import WeatherStats from "../WeatherStats/WeatherStats";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import DailyForcast from "../DailyForcast/DailyForcast";
import Loader from "../Loader/Loader";

// imported images for the icons
import sunnyImage from "../../assets/image/sunny.png";

export default function WeatherInfo() {
  return (
    <div className={styles.weatherInfoLayout}>
      <section>
        <div className={styles.weatherBg}>
          {/* <Loader /> */}
          <article className={styles.weatherInfo}>
            <h3>berlin, germany</h3>
            <p>Tuesday, Aug 5, 2025</p>
          </article>

          <figure className={styles.weatherIcon}>
            <img src={sunnyImage} alt="weather symbol" />
            <h3>
              20<sup>o</sup>
            </h3>
          </figure>
        </div>
        {/* layout for the weather statistics */}
        <article className={styles.weatherStats}>
          <WeatherStats title="feels like" />
          <WeatherStats title="humidity" />
          <WeatherStats title="wind" />
          <WeatherStats title="precipitation" />
        </article>
        <DailyForcast />
      </section>
      <HourlyForecast />
    </div>
  );
}
