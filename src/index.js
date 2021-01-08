function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
  }

let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
  }
return ` ${hours}:${minutes}`;
}

function displayTemperature(response){

console.log(response.data);

let cityElement = document.querySelector("#city");
let dateElement = document.querySelector("#date");

let temperatureElement = document.querySelector("#temperature");
let conditionsElement = document.querySelector("#conditions");
let windElement = document.querySelector("#wind");
let feelElement = document.querySelector("#feel");

cityElement.innerHTML = response.data.name;
temperatureElement.innerHTML = Math.round(response.data.main.temp);
conditionsElement.innerHTML = response.data.weather[0].main;
windElement.innerHTML = Math.round(response.data.wind.speed);
feelElement.innerHTML = Math.round(response.data.main.feels_like);
dateElement.innerHTML = formatDate(response.data.dt *1000);
}


let apiKey = "2a93853098f7d48795c997915462e083";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);