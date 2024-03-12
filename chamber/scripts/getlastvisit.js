
const visitDisplay = document.getElementById('visits');
const currentDate = new Date();
const currentTime = currentDate.getTime();

// get the ms of the last visit
let lastVisit = Number(localStorage.getItem('lastVisitTime')) || 0;

// get the number of days since the last visit
const oneDayInMs = 1000 * 60 * 60 * 24;
let daysSinceLastVisit = Math.floor((currentTime - lastVisit) / oneDayInMs);
const minsSinceLastVisit = Math.ceil((currentTime - lastVisit) / (1000 * 60));

// display a specific message based on the last visit
if (lastVisit == 0) {
    visitDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (daysSinceLastVisit == 0 && minsSinceLastVisit > 0) {
    visitDisplay.innerHTML = `Back so soon! Awesome!`;
} else if (daysSinceLastVisit == 1){ 
        visitDisplay.innerHTML = `You last visited 1 day ago!`;
} else {
    visitDisplay.innerHTML = `You last visited ${daysSinceLastVisit} days ago!`;
}

// store the current time in local storage
localStorage.setItem('lastVisitTime', currentTime);