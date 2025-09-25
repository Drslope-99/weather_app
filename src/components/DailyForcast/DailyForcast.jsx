import React from "react";
import styles from "./DailyForcast.module.css";

// imported images for the weather icons
import sunnyImage from "../../assets/image/sunny.png";
import cloudyImage from "../../assets/image/cloudy.png";
import drizzleImage from "../../assets/image/drizzle.png";
import fogImage from "../../assets/image/fog.png";
// import overcastImage from "../../assets/image/overcast.png";
import rainImage from "../../assets/image/rain.png";
import snowImage from "../../assets/image/snow.png";
import thunderstormImage from "../../assets/image/thunderstorm.png";

export default function DailyForcast() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Daily forecast</h2>
      <div className={styles.layout}>
        <article className={styles.layoutItem}>
          <h3 className={styles.dayTitle}>Tue</h3>
          <figure className={styles.dayWeatherIcon}>
            <img src={rainImage} alt="weather icon" />
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
        </article>
      </div>
    </section>
  );
}
