const currentTemp = document.getElementById('current-temp');
const currentHumidity = document.getElementById('current-humidity');
const currentIcon = document.getElementById('current-icon');
const weatherDesc = document.getElementById('current-desc');

const tomorrowTemp = document.getElementById('tomorrow-temp');
const tomorrowIcon = document.getElementById('tomorrow-icon');
const tomorrowDesc = document.getElementById('tomorrow-desc');

const mltDays = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=imperial&&appid=710bb94f8ac1a0695f7197b282e4ba48";

const getWeather = async () => {
    try {
        const response = await fetch(mltDays);
        if (response.ok) {
            const data = await response.json()
            displayWeather(data)
            getNextDay(data)
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
        const temp = data.list[0].main.temp;
        const humidity = data.list[0].main.humidity;
        let desc = data.list[0].weather[0].description;
        let icon = data.list[0].weather[0].icon;

        currentTemp.innerHTML = `Temperature: ${round(temp)}&deg;F`;
        currentHumidity.innerHTML = `Humidity: ${humidity}%`;
        weatherDesc.innerHTML = `${capitalize(desc)}`;
        currentIcon.setAttribute('alt', desc);
        currentIcon.setAttribute('loading', 'lazy');
        currentIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    }
    else {
        console.error("Temperature: N/A");
    }
}

function getNextDay(data) {
    const todayDate = new Date(data.list[0].dt_txt);
    const nextDay = new Date(todayDate);
    nextDay.setDate(todayDate.getDate() + 1);
    const tomorrowForecast = data.list.filter(item => {
        const itemDate = new Date(item.dt_txt);
        return itemDate.getDate() === nextDay.getDate() && itemDate.getHours() === 15;
    });
    let tomorrowdesc = tomorrowForecast[0].weather[0].description;
    let tomorrowicon = tomorrowForecast[0].weather[0].icon;
    
    if (tomorrowForecast[0].main.temp !== undefined) {
        const temp = tomorrowForecast[0].main.temp;
        tomorrowTemp.innerHTML = `Temperature at 3PM: ${round(temp)}&deg;F`;
        tomorrowDesc.innerHTML = `${capitalize(tomorrowdesc)}`;
        tomorrowIcon.setAttribute('alt', tomorrowdesc);
        tomorrowIcon.setAttribute('loading', 'lazy');
        tomorrowIcon.src = `https://openweathermap.org/img/w/${tomorrowicon}.png`;
    } else {
        console.error("Temperature at 3PM: N/A");
    }
}

getWeather();