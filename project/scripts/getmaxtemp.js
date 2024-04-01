const maxTemp = document.getElementById('hero-banner');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=imperial&appid=710bb94f8ac1a0695f7197b282e4ba48";

const getMaxTemp = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            displayMaxTemp(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
}

const roundToWhole = (number) => {
    return Math.round(number);
}

const displayMaxTemp = (data) => {
    if (data.main.temp_max !== undefined) {
        let temp = data.main.temp_max;
        maxTemp.innerHTML = `Max Temperature: ${roundToWhole(temp)}&deg;F`;
    }
    else {
        console.error("Max Temperature: N/A");
    }
}

getMaxTemp();