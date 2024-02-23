
const visitDisplay = document.getElementById('visits');
const currentDate = new Date();
const currentTime = currentDate.getTime();

// Get the ms of the last visit
let lastVisit = Number(localStorage.getItem('lastVisitTime')) || 0;

const oneDayInMs = 1000 * 60 * 60 * 24;
let daysSinceLastVisit = Math.floor((currentTime - lastVisit) / oneDayInMs);

const minsSinceLastVisit = ((currentTime - lastVisit) / (1000 * 60));

console.log(`Days: ${daysSinceLastVisit}`);
console.log(`Mins: ${minsSinceLastVisit}`);
console.log(`Last Visit: ${lastVisit}`);    
console.log(`Current Time: ${currentTime}`);

if (daysSinceLastVisit < 1 && minsSinceLastVisit > 0) {
    visitDisplay.innerHTML = `Back so soon! Awesome!`;
} else if (daysSinceLastVisit == 0) {
    visitDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (daysSinceLastVisit == 1){ 
        visitDisplay.innerHTML = `You last visited 1 day ago!`;
    
} else {
    visitDisplay.innerHTML = `You last visited ${daysSinceLastVisit} days ago!`;
}

localStorage.setItem('lastVisitTime', currentTime);