let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let now = new Date();
  let weekDay = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let time = `${hours}:${minutes}\u00A0\u00A0\u00A0\u00A0|`;
  let currentDay = document.querySelector("#day");
  let currentTime = document.querySelector("#time");
  currentDay.innerHTML = `${weekDay}\u00A0\u00A0\u00A0\u00A0|`;
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

    let iconElementOne = document.querySelector("#iconOne");
    let iconElementTwo = document.querySelector("#iconTwo");
    let iconElementThree = document.querySelector("#iconThree");
    let iconElementFour = document.querySelector("#iconFour");
    let iconElementFive = document.querySelector("#iconFive");
    let iconDayOne =  response.data.list[1].weather[0].icon;
    let iconDayTwo =  response.data.list[9].weather[0].icon;
    let iconDayThree =  response.data.list[17].weather[0].icon;
    let iconDayFour =  response.data.list[25].weather[0].icon;
    let iconDayFive =  response.data.list[33].weather[0].icon;
   
     iconElementOne.innerHTML= `<div id="iconOne" class="col">
    <img style="width: 100px; "src="http://openweathermap.org/img/wn/${iconDayOne}.png" alt=""></div>`;
     iconElementTwo.innerHTML= `<div id="iconTwo" class="col">
    <img style="width: 100px; "src="http://openweathermap.org/img/wn/${iconDayTwo}.png" alt=""></div>`;
     iconElementThree.innerHTML= `<div id="iconThree" class="col">
    <img style="width: 100px; "src="http://openweathermap.org/img/wn/${iconDayThree}.png" alt=""></div>`;
     iconElementFour.innerHTML= `<div id="iconFour" class="col">
    <img style="width: 100px; "src="http://openweathermap.org/img/wn/${iconDayFour}.png" alt=""></div>`;
     iconElementFive.innerHTML= `<div id="iconFive" class="col">
    <img style="width: 100px; "src="http://openweathermap.org/img/wn/${iconDayFive}.png" alt=""></div>`;

    if(iconDayOne === "01d" || iconDayOne === "01n") {
      iconElementOne.setAttribute("src", "img/iconFive.png");
    } else if(iconDayOne === "02d" || iconDayOne === "02n") {
      iconElementOne.setAttribute("src", "img/iconFour.png");
    } else if(iconDayOne === "03d" || iconDayOne === "03n") {
     iconElementOne.setAttribute("src", "img/iconOne.png");
    } else if(iconDayOne === "04d" || iconDayOne === "04n") {
     iconElementOne.setAttribute("src", "img/iconOne.png");
    } else if(iconDayOne === "09d" || iconDayOne === "09n") {
     iconElementOne.setAttribute("src", "img/iconTwo.png");
    } else if(iconDayOne === "10d" || iconDayOne === "10n") {
     iconElementOne.setAttribute("src", "img/iconTwo.png");
    } else if(iconDayOne === "11d" || iconDayOne === "11n") {
      iconElementOne.setAttribute("src", "img/iconTwo.png");
    } else if(iconDayOne === "13d" || iconDayOne === "13n") {
      iconElementOne.setAttribute("src", "img/iconThree.png");
    } else if(iconDayOne === "50d" || iconDayOne === "50n") {
      iconElementOne.setAttribute("src", "img/iconOne.png");
    }


    let minMaxOne = document.querySelector("#minMaxOne");
    let minMaxTwo = document.querySelector("#minMaxTwo");
    let minMaxThree = document.querySelector("#minMaxThree");
    let minMaxFour = document.querySelector("#minMaxFour");
    let minMaxFive = document.querySelector("#minMaxFive");
    let forecastDayOne = response.data.list[1];
    let forecastDayTwo = response.data.list[9];
    let forecastDayThree = response.data.list[17];
    let forecastDayFour = response.data.list[25];
    let forecastDayFive = response.data.list[33];

minMaxOne.innerHTML= `<div class="col" id="minMaxOne">
							<div class="col">
								<h4>${Math.round(forecastDayOne.main.temp_max)}°  <span id="degrees-low">${Math.round(forecastDayOne.main.feels_like)}°</span></h4>
							</div>`;
minMaxTwo.innerHTML= `<div class="col" id="minMaxTwo">
							<div class="col">
								<h4>${Math.round(forecastDayTwo.main.temp_max)}°  <span id="degrees-low">${Math.round(forecastDayTwo.main.feels_like)}°</span></h4>
							</div>`;
minMaxThree.innerHTML= `<div class="col" id="minMaxThree">
							<div class="col">
								<h4>${Math.round(forecastDayThree.main.temp_max)}°  <span id="degrees-low">${Math.round(forecastDayThree.main.feels_like)}°</span></h4>
							</div>`;
minMaxFour.innerHTML= `<div class="col" id="minMaxFour">
							<div class="col">
								<h4>${Math.round(forecastDayFour.main.temp_max)}°  <span id="degrees-low">${Math.round(forecastDayFour.main.feels_like)}°</span></h4>
							</div>`;
minMaxFive.innerHTML= `<div class="col" id="minMaxFive">
							<div class="col">
								<h4>${Math.round(forecastDayFive.main.temp_max)}°  <span id="degrees-low">${Math.round(forecastDayFive.main.feels_like)}°</span></h4>
							</div>`;
            }

            
            let input = document.querySelector("#city-form");
            input.addEventListener("submit", showWeather);
            
            function showWeather(event) {
            event.preventDefault();
            let cityInput = document.querySelector("#city-input");
            let currentCity = document.querySelector("#city");
            currentCity.innerHTML = `${cityInput.value}`;
            searchCity(cityInput.value);
          }
          
          function showTemperature(response) {
            let newTemperature = Math.round(response.data.main.temp);
            let temperatureElement = document.querySelector("#main-degree");
            temperatureElement.innerHTML = `${newTemperature}`;
            let newDescription = response.data.weather[0].main;
            let currentDescription = document.querySelector("#weather-description");
            currentDescription.innerHTML = `${newDescription}`;
            let bigIcon = document.querySelector("#bigIcon");
            
            bigIcon.setAttribute ("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
            bigIcon.setAttribute ("alt", response.data.weather[0].description);
          }
          
          function searchCity(city) {
            let apiKey = "f2cebfbf982873905eeaba1ac6acbbfd";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
            axios.get(`${apiUrl}`).then(showTemperature);
            apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
            axios.get(apiUrlForecast).then(displayForecast);
          }
          
          searchCity("Austin");
