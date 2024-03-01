// get the current date and time
const currentDate = new Date();
const currentTime = currentDate.getTime();

const currentRecordDate = document.getElementById('date');

// Set the date input field to the current date
currentRecordDate.value = currentTime;