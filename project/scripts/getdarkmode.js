const darkMode = document.querySelector('.switch input[type="checkbox"]');
let body = document.querySelector('body');
const h1 = document.querySelector('h1');
const banner = document.querySelector('#hero-banner');
const reservemsg = document.querySelector('.reserve-msg');
const specialoffer = document.querySelector('#special-offer');

// function to toggle dark mode
function activateDarkMode() {
    // check if the elements exist before attempting to apply changes
    if (body) {
        // if dark mode is enabled
        if (darkMode.checked) {
            body.classList.add('dark-style');
            h1.style.color = '#14160C';
            banner.style.color = '#14160C';
            reservemsg.style.color = 'white';
            reservemsg.style.backgroundColor = '#333333';
            specialoffer.style.color = 'white';
            specialoffer.style.backgroundColor = '#333333';
        }
        // if dark mode is disabled
        else {
            body.classList.remove('dark-style');
            reservemsg.style.color = '#14160C';
            reservemsg.style.backgroundColor = '#E9F1EE';
            specialoffer.style.color = '#14160C';
            specialoffer.style.backgroundColor = '#F1BA53';
            }
        }
    }

// check for dark mode preference
if (darkMode) {
    darkMode.addEventListener('change', activateDarkMode);
}

// call the function initially to apply dark mode settings if needed
activateDarkMode();