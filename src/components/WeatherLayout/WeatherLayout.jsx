import React from "react";
import styles from "./WeatherLayout.module.css";
import WeatherStats from "../WeatherStats/WeatherStats";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import DailyForcast from "../DailyForcast/DailyForcast";
import Loader from "../Loader/Loader";

// imported images for the icons
import sunnyImage from "../../assets/image/sunny.png";

function formatDate(date) {
  const d = new Date(date + ":00");

  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long", // Tuesday
    month: "short", // Aug
    day: "numeric", // 5
    year: "numeric", // 2025
  }).format(d);
  return formatted;
}
function formatCountry(code) {
  if (!code) return ""; // skip if no code yet
  try {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code);
  } catch (err) {
    console.error("Invalid country code:", code);
    return code; // fallback to showing the code itself
  }
}
export default function WeatherInfo({ data, isLoading, region }) {
  const {
    time,
    temperature_2m,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation,
  } = data?.current || {};

  const { country, state } = region?.[0] || {};

  return (
    <div className={styles.weatherInfoLayout}>
      <section>
        <div className={styles.weatherBg}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <article className={styles.weatherInfo}>
                <h3>
                  {state}, {formatCountry(country)}
                </h3>
                <p>{formatDate(time)}</p>
              </article>

              <figure className={styles.weatherIcon}>
                <img src={sunnyImage} alt="weather symbol" />
                <h3>
                  {Math.round(temperature_2m)}
                  <sup>o</sup>
                </h3>
              </figure>
            </>
          )}
        </div>
        {/* layout for the weather statistics */}
        <article className={styles.weatherStats}>
          <WeatherStats title="feels like" stat={temperature_2m} unit="°" />
          <WeatherStats title="humidity" stat={relative_humidity_2m} unit="%" />
          <WeatherStats title="wind" stat={wind_speed_10m} unit="km/h" />
          <WeatherStats title="precipitation" stat={precipitation} unit="mm" />
        </article>
        <DailyForcast />
      </section>
      <HourlyForecast />
    </div>
  );
}
