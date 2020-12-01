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

let apiKey = "e65f46834bdf8f5b4de9663c2d926f51";
let AthensUrl = `https://api.openweathermap.org/data/2.5/weather?q=Athens&appid=${apiKey}&units=metric`;
let AthWeatherDescription = document.querySelector("#weather-description");

function displayBaseWeather(response) {
  let AthensTemp=document.querySelector("#temperature-shown");
  AthensTemp.innerHTML = Math.round(response.data.main.temp);
  AthWeatherDescription.innerHTML =  "e65f46834bdf8f5b4de9663c2d926f51";
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

axios.get(AthensUrl).then(displayBaseWeather);

function convertoCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-shown");
  temperatureElement.innerHTML = (temperatureElement.value -32)*5/9;
}

function convertoF(event) {
  event.preventDefault();
  let temperatureElement = document.getElementById("#temperature-shown");
  temperatureElement.innerHTML = (temperatureElement.value *9/5+32);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertoF);

let CelsiusLink = document.querySelector("#celsius-link");
CelsiusLink.addEventListener("click", convertoCelsius);

function displayWeather(Athens) {
  Athens.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature-shown");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].main;
}

