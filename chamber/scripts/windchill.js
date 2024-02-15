
const getWindchill = async () => {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brugg%20aargau%20switzerland?unitGroup=us&key=TL4E7JG8UXWJPWVKL7GVJ29U2&contentType=json")
        infoList = await response.json()
        displayInfo(infoList)
    } 
    catch (error) {
        console.error("Error fetching emoji data: ", error)
    }
};

const displayWindchill= (infoList) => {
    const temperature = infoList.days[0].temp
    const windspeed = infoList.days[0].windspeed
    const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16)
    document.getElementById("windchill").innerHTML = `Windchill: ${windchill.toFixed(2)}°F`
};


displayWindchill();
