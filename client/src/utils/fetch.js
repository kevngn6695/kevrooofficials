import axios from "axios";

export const fetchWeatherAPI = (setWeatherData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = "ee5dccd95a76b04aaad1b31306304558"; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        // Fetch weather data
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        resolve("Successfully get data from the weather api");
      });
    } catch (error) {
      reject("Error fetching weather data:", error);
    }
  });
};
