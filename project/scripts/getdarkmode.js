const darkMode = document.querySelector('.switch input[type="checkbox"]');
let body = document.querySelector('body');
const h1 = document.querySelector('h1');

// function to toggle dark mode
function activateDarkMode() {
    // check if the elements exist before attempting to apply changes
    if (body) {
        // if dark mode is enabled
        if (darkMode.checked) {
            body.classList.add('dark-style');
            h1.style.color = '#14160C';
        }
        // if dark mode is disabled
        else {
            body.classList.remove('dark-style');
            }
        }
    }

// check for dark mode preference
if (darkMode) {
    darkMode.addEventListener('change', activateDarkMode);
}

// call the function initially to apply dark mode settings if needed
activateDarkMode();