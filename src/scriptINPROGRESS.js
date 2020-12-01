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

  let dateElement1 = document.querySelector("#display-date"); 
  dateElement1.innerHTML = `${dayLong}, ${currentHR}:${minutes} ${ProiVrady}`;
  let dayOne =document.querySelector("#day1");
  let dayTwo =document.querySelector("#day2");
  let dayThree =document.querySelector("#day3");
  let dayFour =document.querySelector("#day4");
  let dayFive=document.querySelector("#day5");
  if (dayIndex=6) {
    dayOne.innerHTML=daysShort[0];
    dayTwo.innerHTML=daysShort[1];
    dayThree.innerHTML=daysShort[2];
    dayFour.innerHTML=daysShort[3];
    dayFive.innerHTML=daysShort[4];
  }