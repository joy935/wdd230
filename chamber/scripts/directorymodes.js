const gridBtn = document.querySelector('#directory-grid');
const listBtn = document.querySelector('#directory-list');
const display = document.querySelector('article');

// set the default view to grid
gridBtn.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

// set the view to list
listBtn.addEventListener('click', showList);

// function to show the list view
function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
}