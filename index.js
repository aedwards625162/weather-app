let days = [
    "Sun.",
    "Mon.",
    "Tues.",
    "Wed.",
    "Thurs.",
    "Fri.",
    "Sat."
  ];
  
  let now = new Date();
  let weekDay = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let time = `${hours}:${minutes}`;
  let currentDay = document.querySelector("#day");
  let currentTime = document.querySelector("#time");
  currentDay.innerHTML = `${weekDay}`;
  currentTime.innerHTML = `${time}`;
  
  
  function showWeather(event) {
      event.preventDefault();
      let apiKey = "f2cebfbf982873905eeaba1ac6acbbfd";
      let searchCity = document.querySelector("#city-input");
      let currentCity = document.querySelector("#city");
      currentCity.innerHTML = `${searchCity.value}`;
      let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=imperial&appid=${apiKey}`;
      axios.get(`${apiUrl}`).then(showTemperature);
  }
  
  let input = document.querySelector("#city-form");
  input.addEventListener("submit", showWeather);
  
  function showTemperature(response) {
    let newTemperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("h1");
    temperatureElement.innerHTML = `${newTemperature}`;
    let newDescription = response.data.weather[0].main;
    let currentDescription = document.querySelector("#weather-description");
    currentDescription.innerHTML = `${newDescription}`;
    let bigIcon = document.querySelector("#bigIcon");

    bigIcon.setAttribute ("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    bigIcon.setAttribute ("alt", response.data.weather[0].description);
  
  }
  
  
  