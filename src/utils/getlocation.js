export default function getLocation() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject("Geolocation not supported by your brower");
      return;
    }

    //obtain your current coordinates based on your location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(`${error.code}: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  });
}
