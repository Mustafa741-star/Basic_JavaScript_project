// 49de79e99787473e838185403261703
// https://api.weatherapi.com/v1/current.json?key=49de79e99787473e838185403261703&q=Delhi&aqi=yes

const api = "https://api.weatherapi.com/v1/current.json?key=49de79e99787473e838185403261703&aqi=yes&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDisplay = document.querySelector(".weather");


async function checkWeather(city) {
    const response = await fetch(api + city);

    let data = await response.json();

    document.querySelector(".city").textContent = data.location.name;
    document.querySelector(".temp").textContent = Math.floor(data.current.temp_c) + "°C";
    document.querySelector(".humidity").textContent = data.current.humidity + "%";
    document.querySelector(".wind").textContent = data.current.wind_kph + "km/h";


    if(data.current.condition.text === "Clear" || data.current.condition.text === "Sunny"){
        weatherIcon.src = "assets/images/clear.png";
    }
    else if(data.current.condition.text === "Patchy rain nearby"){
        weatherIcon.src = "assets/images/rain.png";
    }
    else if(data.current.condition.text== 'Partly cloudy'){
        weatherIcon.src = "assets/images/clouds.png"
    }
    else if(data.current.condition.text== 'Mist'){
        weatherIcon.src = "assets/images/mist.png"
    }
    else if(data.current.condition.text== 'Drizzle'){
        weatherIcon.src = "assets/images/drizzle.png"
    }
    else if(data.current.condition.text== 'Snow'){
        weatherIcon.src = "assets/images/snow.png"
    }

    console.log(data.current.condition.text);
    weatherDisplay.style.display = 'block';
    document.querySelector(".error").computedStyleMap.display = 'none'

    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value.toUpperCase());
    searchBox.value = '';
})

// 49de79e99787473e838185403261703
// https://api.weatherapi.com/v1/current.json?key=49de79e99787473e838185403261703&q=London&aqi=yes

// https://api.weatherapi.com/v1/current.json?key=49de79e99787473e838185403261703&aqi=yes&q=

