const currentTemp = document.getElementById('current-temp');
const currentHumidity = document.getElementById('current-humidity');
const currentIcon = document.getElementById('current-icon');
const weatherDesc = document.querySelector('figcaption');
const tomorrowTemp = document.getElementById('tomorrow-temp');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=imperial&&appid=710bb94f8ac1a0695f7197b282e4ba48";

const getWeather = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            // displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};