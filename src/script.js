function formatDate(d) {
  let date = d.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let ProiVrady="AM";
  let currentHR = d.getHours();
  if (currentHR>12) {
    ProiVrady="PM";
    currentHR=currentHR-12;
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
  let daysShort= [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  let dayLong = daysFull[dayIndex];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let dateElement1 = document.querySelector("#display-date"); 
  dateElement1.innerHTML = `${dayLong}, ${currentHR}:${minutes}${ProiVrady}`;
  let dateElement2=document.querySelector("#display-date2");
  dateElement2.innerHTML=`${date} ${month} ${year}`;
  let dayOne =document.querySelector("#day1");
  dayOne.innerHTML= daysShort[dayIndex+1];
}

let now = new Date();
formatDate(now);

function displayWeather(response) {
  let cityShown = document.querySelector("#city");
  cityShown.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature-shown");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "e65f46834bdf8f5b4de9663c2d926f51";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function retrievePosition(position) {
  let apiKey = "e65f46834bdf8f5b4de9663c2d926f51";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
