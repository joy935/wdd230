const visitDisplay = document.getElementById('visits');

let numVisits = Number(localStorage.getItem('numVisits-list')) || 0;

if (numVisits != 0) {
    visitDisplay.innerHTML = `Number of Visits: ${numVisits}`;
} else {
    visitDisplay.innerHTML = `This is your first visit, welcome!`;
}

numVisits++;

localStorage.setItem('numVisits-list', numVisits);