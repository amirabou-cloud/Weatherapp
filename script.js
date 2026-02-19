const apiKey = "80260ab182cccdb736558d7adb926a31";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "images/drizzling.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "images/mist.png";
    } else if (data.weather[0].main == "thunder") {
      document.querySelector(".weather-icon").src = "images/thunder.png";
    } else if (data.weather[0].main == "snow") {
      document.querySelector(".weather-icon").src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
