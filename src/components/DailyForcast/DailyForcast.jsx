import React from "react";
import styles from "./DailyForcast.module.css";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DailyForcast({ data, isLoading }) {
  const daily = data?.daily;

  const transformed =
    daily?.time?.map((t, i) => ({
      time: t,
      minTemp: daily.temperature_2m_min?.[i],
      maxTemp: daily.temperature_2m_max?.[i],
      icon: daily.weather_code?.[i],
    })) || [];

  console.log(transformed);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Daily forecast</h2>
      <div className={styles.layout}>
        {transformed.map((data) => (
          <article className={styles.layoutItem} key={data.time}>
            <h3 className={styles.dayTitle}>
              {days[new Date(data.time).getDay()]}
            </h3>
            <figure className={styles.dayWeatherIcon}>
              <img src={getWeatherIcon(data.icon)} alt="weather icon" />
            </figure>
            <div className={styles.dayTemp}>
              <span className={styles.tempUnit}>
                {Math.round(data.maxTemp)}
                <sup>o</sup>
              </span>
              <span className={styles.tempUnit}>
                {Math.round(data.minTemp)}
                <sup>o</sup>
              </span>
            </div>
          </article>
        ))}

        {/* <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Wed</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={drizzleImage} alt="weather icon" />
          </figure>
          <div className={styles.dayTemp}>
            <span className={styles.tempUnit}>
              21<sup>o</sup>
            </span>
            <span className={styles.tempUnit}>
              15<sup>o</sup>
            </span>
          </div>
        </article>

        <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Thu</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={sunnyImage} alt="weather icon" />
          </figure>
          <div className={styles.dayTemp}>
            <span className={styles.tempUnit}>
              21<sup>o</sup>
            </span>
            <span className={styles.tempUnit}>
              15<sup>o</sup>
            </span>
          </div>
        </article>

        <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Fri</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={cloudyImage} alt="weather icon" />
          </figure>
          <div className={styles.dayTemp}>
            <span className={styles.tempUnit}>
              21<sup>o</sup>
            </span>
            <span className={styles.tempUnit}>
              15<sup>o</sup>
            </span>
          </div>
        </article>

        <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Sat</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={thunderstormImage} alt="weather icon" />
          </figure>
          <div className={styles.dayTemp}>
            <span className={styles.tempUnit}>
              21<sup>o</sup>
            </span>
            <span className={styles.tempUnit}>
              15<sup>o</sup>
            </span>
          </div>
        </article>

        <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Sun</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={snowImage} alt="weather icon" />
          </figure>
          <div className={styles.dayTemp}>
            <span className={styles.tempUnit}>
              21<sup>o</sup>
            </span>
            <span className={styles.tempUnit}>
              15<sup>o</sup>
            </span>
          </div>
        </article>

        <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Mon</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={fogImage} alt="weather icon" />
          </figure>
          <div className={styles.dayTemp}>
            <span className={styles.tempUnit}>
              21<sup>o</sup>
            </span>
            <span className={styles.tempUnit}>
              15<sup>o</sup>
            </span>
          </div>
        </article> */}
      </div>
    </section>
  );
}
