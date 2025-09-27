// ?lat={lat}&lon={lon}&limit={limit}&appid={API key}

const baseUrl = import.meta.env.VITE_REVERSE_GEO_URL;
const key = import.meta.env.VITE_API_KEY;

export default function getRegion({ latitude, longitude }) {
  const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${key}`;
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error("failed to fetch country");

    return response.json();
  });
}
