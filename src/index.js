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


let cityElement = document.querySelector("#city");
let dateElement = document.querySelector("#date");

let iconElement = document.querySelector("#icon");
let temperatureElement = document.querySelector("#temperature");
let conditionsElement = document.querySelector("#conditions");
let windElement = document.querySelector("#wind");
let feelElement = document.querySelector("#feel");



cityElement.innerHTML = response.data.name;

iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
iconElement.setAttribute("alt", response.data.weather[0].description);
temperatureElement.innerHTML = Math.round(response.data.main.temp);
conditionsElement.innerHTML = response.data.weather[0].main;
windElement.innerHTML = Math.round(response.data.wind.speed);
feelElement.innerHTML = Math.round(response.data.main.feels_like);
dateElement.innerHTML = formatDate(response.data.dt *1000);

}
function search(city){

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}
    
function handleSubmit(event){
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
if (cityInputElement.value){
document.querySelector("#city-input").innerHTML = `${cityInputElement.value}`;
let city=`${cityInputElement.value}`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
    }else{
        alert("Please type a city...");
    }}
  

function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(displayTemperature);
  }

  function showCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let button = document.querySelector("location-button");
button.addEventListener("click", showCurrentLocation);

let apiKey = "2a93853098f7d48795c997915462e083";

search("London");