const hamButton = document.querySelector('#hbmenu');
const mainnav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hamButton.classList.toggle('open');
});