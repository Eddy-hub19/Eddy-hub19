window.onload = function () {
    let preloader = document.querySelector(".overlay")
    preloader.style.display = "none"
}

const API_KEY = "40a6345d9f7dd35bb1a40de36996f5f5"
const BASE_URL = `http://api.openweathermap.org/`

const weatherBlock = document.querySelector("#weather")
const inputEl = document.querySelector(".search-weather")

inputEl.addEventListener("input", onSearch)

function onSearch() {
    let inputValue = inputEl.value.trim()

    fetchAPI(inputValue)
}

async function fetchAPI(country) {
    const server = `${BASE_URL}data/2.5/weather?units=metric&q=${country}&appid=${API_KEY}`
    const response = await fetch(server, {
        method: "GET",
    })
    const responseResult = await response.json()

    if (response.ok) {
        getWeather(responseResult)
    } else {
        weatherBlock.innerHTML = "Error"
    }
}

function getWeather(data) {
    const location = data.name
    const temp = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const weatherStatus = data.weather[0].main
    const weatherIcon = data.weather[0].icon

    const template =
        /*html*/
        `
        <div class="weather__header">
            <div class="weather__main">
                <div class="weather__city">${location}</div>
                <div class="weather__status">${weatherStatus}</div>
            </div>
        </div>
        <div class="weather__info">
            <div class="weather__icon">
                <img width="80" height="80" src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherIcon}" />
            </div>
            <div class="weather__temp">${temp}℃</div>
            <div class="weather__feels-like">Feels like: ${feelsLike}</div>
        </div>
        `
    weatherBlock.innerHTML = template
}
