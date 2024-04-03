const currentTemp = document.getElementById('current-temp');
const currentHumidity = document.getElementById('current-humidity');
const currentIcon = document.getElementById('current-icon');
const weatherDesc = document.querySelector('figcaption');

const tomorrowTemp = document.getElementById('tomorrow-temp');

const mltDays = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=imperial&&appid=710bb94f8ac1a0695f7197b282e4ba48";

const getWeather = async () => {
    try {
        const response = await fetch(mltDays);
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
}

const round = (number) => {
    return Math.round(number);
}

function displayWeather(data) {
    if (data.list[0].main.temp !== undefined) {
        let temp = data.list[0].main.temp;
        let humidity = data.list[0].main.humidity;
        let desc = data.list[0].weather[0].description;
        let icon = data.list[0].weather[0].icon;

        currentTemp.innerHTML = `Temperature ${round(temp)}&deg;F`;
        currentHumidity.innerHTML = `Humidity ${humidity}%`;
        weatherDesc.innerHTML = `${capitalize(desc)}`;
        currentIcon.setAttribute('alt', desc);
        currentIcon.setAttribute('loading', 'lazy');
        currentIcon.src = `https://openweathermap.org/img/w/${icon}.png`;

        let tempTomorrow = data.list[8].main.temp;
        tomorrowTemp.innerHTML = `Temperature ${round(tempTomorrow)}&deg;F`;
    }
    else {
        console.error("Temperature: N/A");
    }
}

getWeather();