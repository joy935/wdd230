const currentDate = new Date();
const currentTime = currentDate.getTime();
const currentRecordDate = document.getElementById('date');

currentRecordDate.value = currentTime;