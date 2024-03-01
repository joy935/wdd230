const range = document.querySelector('#rating');
const rangeValue = document.querySelector('#rangevalue');

range.addEventListener('change', getRating);
range.addEventListener('input', getRating);

/* get the rating */
function getRating() {
    range.innerHTML = range.value;
    rangeValue.innerHTML = range.value;
}