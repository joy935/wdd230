const windchill = document.getElementById("windchill");
let infoList = [];

const getWindchill = async () => {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brugg%20aargau%20switzerland?unitGroup=us&key=TL4E7JG8UXWJPWVKL7GVJ29U2&contentType=json")
        infoList = await response.json()
        displayWindchill(infoList)
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

const displayWindchill= (infoList) => {
    if (infoList && infoList.days && infoList.days.length > 0) {
        const currentDay = infoList.days[0];
        const temperature = currentDay.temp
        const windspeed = currentDay.windspeed
        const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16)
        document.getElementById("windchill").innerHTML = `Windchill: ${windchill.toFixed(2)}°F`
    } else {
        document.getElementById("windchill").innerHTML = "Windchill: N/A"
    }
};

getWindchill();