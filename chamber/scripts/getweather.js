const currentTemp = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const weatherDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=47.48&lon=8.21&units=imperial&appid=710bb94f8ac1a0695f7197b282e4ba48";

const getWeather = async () => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

const capitalize = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const roundToWhole = (number) => {
    return Math.round(number);
}

function displayWeather(data) {
    if (data.main.temp !== undefined) {
        let temp = data.main.temp;
        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;

        currentTemp.innerHTML = `${roundToWhole(temp)}&deg;F`;
        weatherDesc.innerHTML = capitalize(desc);
        weatherIcon.setAttribute('alt', desc);
        weatherIcon.setAttribute('loading', 'lazy');
        weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`;
    }
    else {
        console.error("Temperature: N/A");
    }
}

getWeather();