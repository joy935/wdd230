const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=710bb94f8ac1a0695f7197b282e4ba48";

const apiFetch = async () => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

apiFetch();