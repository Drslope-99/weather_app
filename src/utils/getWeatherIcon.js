// utils/getWeatherIcon.js

import sunnyImage from "../assets/image/sunny.png";
import cloudyImage from "../assets/image/cloudy.png";
import drizzleImage from "../assets/image/drizzle.png";
import fogImage from "../assets/image/fog.png";
import overcastImage from "../assets/image/overcast.png";
import rainImage from "../assets/image/rain.png";
import snowImage from "../assets/image/snow.png";
import thunderstormImage from "../assets/image/thunderstorm.png";

export function getWeatherIcon(code) {
  const iconMap = {
    // Clear
    0: sunnyImage, // Clear sky
    1: sunnyImage, // Mainly clear

    // Clouds
    2: cloudyImage, // Partly cloudy
    3: overcastImage, // Overcast

    // Fog
    45: fogImage,
    48: fogImage,

    // Drizzle
    51: drizzleImage,
    53: drizzleImage,
    55: drizzleImage,

    // Rain
    61: rainImage,
    63: rainImage,
    65: rainImage,

    // Snow
    71: snowImage,
    73: snowImage,
    75: snowImage,

    // Showers
    80: rainImage,
    81: rainImage,
    82: rainImage,

    // Thunderstorms
    95: thunderstormImage,
    96: thunderstormImage,
    99: thunderstormImage,
  };

  return iconMap[code] || overcastImage; // fallback if code not found
}
