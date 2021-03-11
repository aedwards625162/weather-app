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
  
  function displayForecast (response) {
    let days = [
    "Sun.",
    "Mon.",
    "Tues.",
    "Wed.",
    "Thurs.",
    "Fri.",
    "Sat.",
    "Sun.",
    "Mon.",
    "Tues.",
    "Wed.",
    "Thurs.",
    "Fri.",
    "Sat.",
    "Sun."
  ];
     let daySlotOne = days[now.getDay() + 1]; 
     let daySlotTwo = days[now.getDay() + 2]; 
     let daySlotThree = days[now.getDay() + 3]; 
     let daySlotFour = days[now.getDay() + 4]; 
     let daySlotFive = days[now.getDay() + 5]; 
     let dayOne = document.querySelector("#dayOne");
     let dayTwo = document.querySelector("#dayTwo");
     let dayThree = document.querySelector("#dayThree");
     let dayFour = document.querySelector("#dayFour");
     let dayFive = document.querySelector("#dayFive");
     dayOne.innerHTML = `${daySlotOne}`;
    dayTwo.innerHTML = `${daySlotTwo}`;
    dayThree.innerHTML = `${daySlotThree}`;
    dayFour.innerHTML = `${daySlotFour}`;
    dayFive.innerHTML = `${daySlotFive}`;
    
  }
  
  function showWeather(event) {
      event.preventDefault();
      let apiKey = "f2cebfbf982873905eeaba1ac6acbbfd";
      let searchCity = document.querySelector("#city-input");
      let currentCity = document.querySelector("#city");
      currentCity.innerHTML = `${searchCity.value}`;
      let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=imperial&appid=${apiKey}`;
      axios.get(`${apiUrl}`).then(showTemperature);

      apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.value}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrlForecast).then(displayForecast);
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
  
  
  