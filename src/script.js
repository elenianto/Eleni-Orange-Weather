function formatDate(d) {
  let date = d.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let ProiVrady = "AM";
  let currentHR = d.getHours();
  if (currentHR > 12) {
    ProiVrady = "PM";
    currentHR = currentHR - 12;
  }
  if (currentHR < 10) {
    currentHR = `0${currentHR}`;
  }
  let minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = d.getDay();
  let daysFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayLong = daysFull[dayIndex];

  let dateElement1 = document.querySelector("#display-date");
  dateElement1.innerHTML = `${dayLong}, ${currentHR}:${minutes} ${ProiVrady}`;
  let dayOne = document.querySelector("#day1");
  let dayTwo = document.querySelector("#day2");
  let dayThree = document.querySelector("#day3");
  let dayFour = document.querySelector("#day4");
  let dayFive = document.querySelector("#day5");
  if (dayIndex === 6) {
    dayOne.innerHTML = daysShort[0];
    dayTwo.innerHTML = daysShort[1];
    dayThree.innerHTML = daysShort[2];
    dayFour.innerHTML = daysShort[3];
    dayFive.innerHTML = daysShort[4];
  } else if (dayIndex === 5) {
    dayOne.innerHTML = daysShort[6];
    dayTwo.innerHTML = daysShort[0];
    dayThree.innerHTML = daysShort[1];
    dayFour.innerHTML = daysShort[2];
    dayFive.innerHTML = daysShort[3];
  } else if (dayIndex === 4) {
    dayOne.innerHTML = daysShort[5];
    dayTwo.innerHTML = daysShort[6];
    dayThree.innerHTML = daysShort[0];
    dayFour.innerHTML = daysShort[1];
    dayFive.innerHTML = daysShort[2];
  } else if (dayIndex === 3) {
    dayOne.innerHTML = daysShort[4];
    dayTwo.innerHTML = daysShort[5];
    dayThree.innerHTML = daysShort[6];
    dayFour.innerHTML = daysShort[0];
    dayFive.innerHTML = daysShort[1];
  } else if (dayIndex === 2) {
    dayOne.innerHTML = daysShort[3];
    dayTwo.innerHTML = daysShort[4];
    dayThree.innerHTML = daysShort[5];
    dayFour.innerHTML = daysShort[6];
    dayFive.innerHTML = daysShort[0];
  } else if (dayIndex === 1) {
    dayOne.innerHTML = daysShort[2];
    dayTwo.innerHTML = daysShort[3];
    dayThree.innerHTML = daysShort[4];
    dayFour.innerHTML = daysShort[5];
    dayFive.innerHTML = daysShort[6];
  } else if (dayIndex === 0) {
    dayOne.innerHTML = daysShort[1];
    dayTwo.innerHTML = daysShort[2];
    dayThree.innerHTML = daysShort[3];
    dayFour.innerHTML = daysShort[4];
    dayFive.innerHTML = daysShort[5];
  }
}

let now = new Date();
formatDate(now);

let apiKey = "e65f46834bdf8f5b4de9663c2d926f51";
let AthensUrl = `https://api.openweathermap.org/data/2.5/weather?q=Athens&appid=${apiKey}&units=metric`;
let AthensForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Athens&appid=${apiKey}&units=metric`;

function displayBaseWeather(response) {
  let baseTemp = document.querySelector("#temperature-shown");
  baseTemp.innerHTML = Math.round(response.data.main.temp);
  let baseWeatherDescription = document.querySelector("#weather-description");
  baseWeatherDescription.innerHTML = response.data.weather[0].main;
  let baseWeatherIcon = document.querySelector("#icon");
  let currentWeatherIcon = response.data.weather[0].icon;
  baseWeatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`,
    "width",
    "105"
  );
  let currentWind = document.querySelector("#display-wind");
  currentWind.innerHTML = ` ${response.data.wind.speed} m/s`;
  let currentHum = document.querySelector("#display-hum");
  currentHum.innerHTML = ` ${response.data.main.humidity}%`;
  let currentFeel = document.querySelector("#display-feels");
  currentFeel.innerHTML = `${Math.round(response.data.main.feels_like)} °C`;
}

function displayBaseForecast(response) {
  let icond1 = document.querySelector("#icond1");
  let currentIcond1 = response.data.list[0].weather[0].icon;
  icond1.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond1}@2x.png`
  );
  icond1.setAttribute("width", "65px");
  let icond2 = document.querySelector("#icond2");
  let currentIcond2 = response.data.list[8].weather[0].icon;
  icond2.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond2}@2x.png`
  );
  icond2.setAttribute("width", "65px");
  let icond3 = document.querySelector("#icond3");
  let currentIcond3 = response.data.list[16].weather[0].icon;
  icond3.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond3}@2x.png`
  );
  icond3.setAttribute("width", "65px");
  let icond4 = document.querySelector("#icond4");
  let currentIcond4 = response.data.list[24].weather[0].icon;
  icond4.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond4}@2x.png`
  );
  icond4.setAttribute("width", "65px");
  let icond5 = document.querySelector("#icond5");
  let currentIcond5 = response.data.list[32].weather[0].icon;
  icond5.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond5}@2x.png`
  );
  icond5.setAttribute("width", "65px");
}

axios.get(AthensUrl).then(displayBaseWeather);
axios.get(AthensForecastUrl).then(displayBaseForecast);

function displayWeather(response) {
  let cityShown = document.querySelector("#city");
  cityShown.innerHTML = response.data.name;
  document.querySelector("#temperature-shown").innerHTML = Math.round(
    response.data.main.temp
  );
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].main;
  let weatherIcon = document.querySelector("#icon");
  let currentWeatherIcon = response.data.weather[0].icon;
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`
  );
  weatherIcon.setAttribute("width", "100px");
  let currentWind = document.querySelector("#display-wind");
  currentWind.innerHTML = ` ${response.data.wind.speed} m/s`;
  let currentHum = document.querySelector("#display-hum");
  currentHum.innerHTML = ` ${response.data.main.humidity}%`;
  let currentFeel = document.querySelector("#display-feels");
  currentFeel.innerHTML = `${Math.round(response.data.main.feels_like)} °C`;
}

function displayForecast(response) {
  let icond1 = document.querySelector("#icond1");
  let currentIcond1 = response.data.list[0].weather[0].icon;
  icond1.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond1}@2x.png`
  );
  icond1.setAttribute("width", "65px");
  let icond2 = document.querySelector("#icond2");
  let currentIcond2 = response.data.list[8].weather[0].icon;
  icond2.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond2}@2x.png`
  );
  icond2.setAttribute("width", "65px");
  let icond3 = document.querySelector("#icond3");
  let currentIcond3 = response.data.list[16].weather[0].icon;
  icond3.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond3}@2x.png`
  );
  icond3.setAttribute("width", "65px");
  let icond4 = document.querySelector("#icond4");
  let currentIcond4 = response.data.list[24].weather[0].icon;
  icond4.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond4}@2x.png`
  );
  icond4.setAttribute("width", "65px");
  let icond5 = document.querySelector("#icond5");
  let currentIcond5 = response.data.list[32].weather[0].icon;
  icond5.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentIcond5}@2x.png`
  );
  icond5.setAttribute("width", "65px");
}

function searchCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  axios.get(apiForecastUrl).then(displayForecast);
  let Imperial = document.querySelector("#Imperial");
  let toMetric = document.querySelector("#Metric");
  Imperial.classList.remove("active");
  toMetric.classList.add("active");
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
  document.querySelector("#city-input").value = "";
}

function retrievePosition(position) {
  let apiKey = "e65f46834bdf8f5b4de9663c2d926f51";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  let ForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
  axios.get(ForecastUrl).then(displayForecast);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function convertToImperial(event) {
  event.preventDefault();
  let TempShown = document.querySelector("#temperature-shown");
  let MetricTemp = TempShown.innerHTML;
  let ImperialTemp = (MetricTemp * 9) / 5 + 32;
  TempShown.innerHTML = Math.round(ImperialTemp);
  let windShown = document.querySelector("#display-wind");
  let MetricWind = windShown.innerHTML.slice(0, -4);
  windShown.innerHTML = `${Math.round(10 * 2.23694 * MetricWind) / 10} mph`;
  let FeelsShown = document.querySelector("#display-feels");
  let MetricFeel = FeelsShown.innerHTML.slice(0, -3);
  FeelsShown.innerHTML = `${
    Math.round(10 * ((MetricFeel * 9) / 5 + 32)) / 10
  } °F`;
  let Metric = document.querySelector("#Metric");
  Metric.classList.remove("active");
  toImperial.classList.add("active");
}

function convertToMetric(event) {
  event.preventDefault();
  let TempShown = document.querySelector("#temperature-shown");
  let ImperialTemp = TempShown.innerHTML;
  let MetricTemp = ((ImperialTemp - 32) * 5) / 9;
  TempShown.innerHTML = Math.round(MetricTemp);
  let windShown = document.querySelector("#display-wind");
  let ImperialWind = windShown.innerHTML.slice(0, -4);
  windShown.innerHTML = `${Math.round((10 * ImperialWind) / 2.23694) / 10} m/s`;
  let FeelsShown = document.querySelector("#display-feels");
  let ImperialFeel = FeelsShown.innerHTML.slice(0, -3);
  FeelsShown.innerHTML = `${
    Math.round((10 * (ImperialFeel - 32) * 5) / 9) / 10
  } °C`;
  let Imperial = document.querySelector("#Imperial");
  Imperial.classList.remove("active");
  toMetric.classList.add("active");
}

let toImperial = document.querySelector("#Imperial");
toImperial.addEventListener("click", convertToImperial);

let toMetric = document.querySelector("#Metric");
toMetric.addEventListener("click", convertToMetric);
