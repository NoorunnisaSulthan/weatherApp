
const searchBox = document.querySelector(".search input ");
const searchBtn = document.querySelector(".search button ");
const weatherIcon = document.querySelector(".weather-icon ");

async function checkWeather(city) {
  const apiUrl =
    "https://api.weatherbit.io/v2.0/current?&include=minutel";

    const apiKey = "INSERT YOUR API KEY FROM WEATHERBIT TO ACCESS THE APP";
  const response = await fetch(
    apiUrl + `&city=${city}` + `&key=${apiKey}`
  );
  const data = await response.json();
  console.log(data);

  if (data.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".details").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.data[0].city_name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.data[0].temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.data[0].rh;
    document.querySelector(".wind").innerHTML =
      data.data[0].wind_spd + " km/h";

      if (
data.data[0].weather.description === "Broken clouds" ||
data.data[0].weather.description === "Overcast clouds" ||
data.data[0].weather.description === "Scattered clouds"||
data.data[0].weather.description === "Few clouds" 
) {
weatherIcon.src = "images/clouds.png";
} else if (
data.data[0].weather.description === "Sand/dust" ||
data.data[0].weather.description === "Clear sky"
) {
weatherIcon.src = "images/clear.png";
} else if (data.data[0].weather.description === "Rain"||
data.data[0].weather.description === "Thunderstorm") {
weatherIcon.src = "images/rain.png";
} else if (data.data[0].weather.description === "Drizzle"||
data.data[0].weather.description === "Shower rain") {
weatherIcon.src = "images/drizzle.png";
} else if (data.data[0].weather.description === "Mist") {
weatherIcon.src = "images/mist.png";
}


    //     //to display block, when user entered in the search filed

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "block";
    document.querySelector(".error").style.display = "none";

    //     }
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});