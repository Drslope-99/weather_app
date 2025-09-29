// ?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max
const baseUrl = import.meta.env.VITE_BASE_URL;
export default function getWeather({ latitude, longitude }) {
  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weather_code`;
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("failed to fetch weather data");
    }
    return res.json();
  });
}
