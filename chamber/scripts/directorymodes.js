const gridBtn = document.querySelector('#directory-grid');
const listBtn = document.querySelector('#directory-list');
const directory = document.querySelector('#directory');

gridBtn.addEventListener('click', () => {
    directory.classList.add('grid');
    directory.classList.remove('list');
});

listBtn.addEventListener('click', showList);

function showList() {
    directory.classList.add('list');
    directory.classList.remove('grid');
}