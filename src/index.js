function displayTemperature(response){

console.log(response.data);

let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let conditionsElement = document.querySelector("#conditions");
let windElement = document.querySelector("#wind");
let feelElement = document.querySelector("#feel");

cityElement.innerHTML = response.data.name;
temperatureElement.innerHTML = Math.round(response.data.main.temp);
conditionsElement.innerHTML = response.data.weather[0].main;
windElement.innerHTML = Math.round(response.data.wind.speed);
feelElement.innerHTML =Math.round(response.data.main.feels_like);
}


let apiKey = "2a93853098f7d48795c997915462e083";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);