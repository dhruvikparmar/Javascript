// Run code only after DOM is loaded
window.onload = function () {
    document.getElementById("weatherForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const city = document.getElementById("cityInput").value;
      getWeather(city);
    });
  };
  
  async function getWeather(city) {
    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      if (!response.ok) throw new Error("Failed to fetch weather data");
  
      const data = await response.json();
      showWeather(data);
      showDetails(data);
    } catch (error) {
      document.getElementById("weather").innerHTML = `<p style="color: red;">${error.message}</p>`;
      document.getElementById("details").innerHTML = "";
    }
  }
  
  function showWeather(data) {
    const area = data.nearest_area[0].areaName[0].value;
    const temp = data.current_condition[0].FeelsLikeC;
    document.getElementById("weather").innerHTML = `
      <h2>${area}</h2>
      <p>Temperature: ${temp} °C</p>
    `;
  }
  
  function showDetails(data) {
    const wind = data.current_condition[0].windspeedKmph;
    const rain = data.weather[0].hourly[0].chanceofrain;
    const uv = data.current_condition[0].uvIndex;
  
    document.getElementById("details").innerHTML = `
      <h3>Details</h3>
      <p>Wind Speed: ${wind} km/h</p>
      <p>Chance of Rain: ${rain}%</p>
      <p>UV Index: ${uv}</p>
    `;
  }
  